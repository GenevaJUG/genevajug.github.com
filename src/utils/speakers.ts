import { getCollection } from 'astro:content';
import fs from 'fs';
import path from 'path';

interface Speaker {
  name: string;
  bio: string;
  image?: string;
  id: string;
}

function nameToImageFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[éèê]/g, 'e')
    .replace(/[àâ]/g, 'a')
    .replace(/[ôö]/g, 'o')
    .replace(/[ç]/g, 'c');
}

export async function getSpeakers(locale: string = 'en'): Promise<Speaker[]> {
  const imagesDir = path.join(process.cwd(), 'public', 'speakers');
  const imageFiles = new Set(fs.readdirSync(imagesDir));

  const allSpeakers = await getCollection('speakers');

  const speakers = allSpeakers
    .filter((speaker) => speaker.data.locale === locale)
    .map((speaker) => {
      const filename = speaker.id.replace(/\.md$/, '');
      // Remove locale prefix to get slug
      const idWithoutLocale = filename.startsWith(`${locale}-`)
        ? filename.slice(locale.length + 1)
        : filename;
      // Extract ID from filename (remove date prefix)
      const id = idWithoutLocale.replace(/^\d{4}-\d{2}-\d{2}-/, '');

      const name = speaker.data.title || 'Unknown';
      const imageFilename = nameToImageFilename(name);
      const imageFile = ['.jpeg', '.jpg', '.png']
        .map((extension) => `${imageFilename}${extension}`)
        .find((filename) => imageFiles.has(filename));

      return {
        name,
        bio: speaker.body.trim(),
        image: imageFile ? `/speakers/${imageFile}` : undefined,
        id,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  // Deduplicate speakers by name, keeping the first occurrence
  const seenNames = new Set<string>();
  return speakers.filter((speaker) => {
    if (seenNames.has(speaker.name)) {
      return false;
    }
    seenNames.add(speaker.name);
    return true;
  });
}

export async function getAllSpeakers(): Promise<Speaker[]> {
  const enSpeakers = await getSpeakers('en');
  const frSpeakers = await getSpeakers('fr');
  return [...enSpeakers, ...frSpeakers];
}

import fs from 'fs';
import path from 'path';

interface TeamMember {
  name: string;
  role: string;
  section: string;
  image?: string;
  description?: string;
  id?: string;
}

interface TeamSection {
  title: string;
  description: string;
  members: TeamMember[];
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

function getTeamMemberId(name: string): string {
  return nameToImageFilename(name);
}

function loadTeamMemberDescription(locale: string, memberId: string): string | undefined {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'team');

  try {
    const fileName = `${locale}-${memberId}.md`;
    const filePath = path.join(contentDir, fileName);

    if (!fs.existsSync(filePath)) return undefined;

    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/^---[\s\S]*?---\s*([\s\S]*)$/);

    if (match) {
      return match[1].trim();
    }
  } catch {
    return undefined;
  }
}

export function getTeam(locale: string = 'en'): TeamSection[] {
  const imagesDir = path.join(process.cwd(), 'public', 'team');
  const imageFiles = new Set(
    fs.readdirSync(imagesDir).map((f: string) => f.replace('.jpg', '').replace('.png', ''))
  );

  const teamData = {
    en: [
      {
        title: 'Board',
        description: 'Responsible for legal and administrative matters',
        members: [
          { name: 'Maxime Nowak', role: 'President', section: 'Board' },
          { name: 'Vincent Sevel', role: 'Treasurer', section: 'Board' },
        ],
      },
      {
        title: 'Crew',
        description: 'Handles operational organization, speaker coordination, website maintenance and community communication',
        members: [
          { name: 'Andréas Crétois', role: '', section: 'Crew' },
          { name: 'Ludovic Bertin', role: '', section: 'Crew' },
          { name: 'Evgeny Mandrikov', role: '', section: 'Crew' },
          { name: 'Julia Mateo', role: '', section: 'Crew' },
          { name: 'Margarita Nedzelska', role: '', section: 'Crew' },
          { name: 'Valerie Sevel', role: '', section: 'Crew' },
        ],
      },
      {
        title: 'Activator',
        description: 'Drives initiatives and supports the community',
        members: [
          { name: 'Xavier Bourguignon', role: '', section: 'Activator' },
        ],
      },
    ],
    fr: [
      {
        title: 'Bureau',
        description: 'Responsable des questions légales et administratives',
        members: [
          { name: 'Maxime Nowak', role: 'Président', section: 'Bureau' },
          { name: 'Vincent Sevel', role: 'Trésorier', section: 'Bureau' },
        ],
      },
      {
        title: 'Crew',
        description: 'Gère l\'organisation opérationnelle, la coordination des intervenants, la maintenance du site et la communication communautaire',
        members: [
          { name: 'Andréas Crétois', role: '', section: 'Crew' },
          { name: 'Ludovic Bertin', role: '', section: 'Crew' },
          { name: 'Evgeny Mandrikov', role: '', section: 'Crew' },
          { name: 'Julia Mateo', role: '', section: 'Crew' },
          { name: 'Margarita Nedzelska', role: '', section: 'Crew' },
          { name: 'Valerie Sevel', role: '', section: 'Crew' },
        ],
      },
      {
        title: 'Activateur',
        description: 'Anime les initiatives et soutient la communauté',
        members: [
          { name: 'Xavier Bourguignon', role: '', section: 'Activateur' },
        ],
      },
    ],
  };

  const sections = teamData[locale as keyof typeof teamData] || teamData.en;

  return sections.map((section) => ({
    ...section,
    members: section.members.map((member) => {
      const imageFilename = nameToImageFilename(member.name);
      const memberId = getTeamMemberId(member.name);
      const hasImage = imageFiles.has(imageFilename);
      const description = loadTeamMemberDescription(locale, memberId);

      return {
        ...member,
        image: hasImage ? `/team/${imageFilename}.jpg` : undefined,
        description,
        id: memberId,
      };
    }),
  }));
}

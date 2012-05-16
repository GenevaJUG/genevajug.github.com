/*!
* jQuery Image Overlay v1.3.2
* http://www.ferretarmy.com/files/jQuery/ImageOverlay/ImageOverlay.html
*
* Copyright (c) 2009-2010 Jon Neal
* Dual licensed under the MIT and GPL licenses, using the same terms as jQuery.
* Refer to http://docs.jquery.com/License
*
* Date: 2010-08-13 (Fri, 13 August 2010)
* Revision: 1.3.2
* This version remedies some of the long-term image height/width issues in the 1.3.x branch
*/
(function($) {

	$.fn.ImageOverlay = function(options) {
		
		// Options.
		var opts = $.extend({}, $.fn.ImageOverlay.defaults, options);
		
		return this.each(function() {
		
			// Allows metadata options to be set on the field level that override plugin options
			// if the metadata plugin is installed. http://docs.jquery.com/Plugins/Metadata
			var thisOpts = $.metadata ? $.extend({}, opts, $(this).metadata()) : opts;
			var imageContainer = $('a', this);
			// Move the captions below the images, so they are hidden by default.
			$(imageContainer).each(function() {

				var hrefOpts = $.metadata ? $.extend({}, thisOpts, $(this).metadata()) : thisOpts;

				// todo: make it so this happens on image load if not yet loaded.
				$('img', this).each(function()
				{
					if ($(this).attr('src') !== "" && (this.complete || this.readyState === 4))
						MakeOverlay($(this).parent(), hrefOpts);
					else
						$(this).load(MakeOverlay($(this).parent(), hrefOpts));
				});
			});
			
			$(this).after('<p style="clear: both; height: 0;">&nbsp;</p>');
		});
		
		function MakeOverlay(imageContainer, hrefOpts)
		{
			var image = new Image();
			image.src = $('img', imageContainer).attr('src');
		
			imageContainer.css({
				width : image.width,
				height : image.height,
				borderColor : hrefOpts.border_color
			});
			$('img', imageContainer).attr({ title : '' });
		
			var imageHeight = $('img', imageContainer).height();
			var captionHeight = $('.caption', imageContainer).height();
			var useBottomOrigin = (hrefOpts.overlay_origin == 'top' ? false : true);
			
			if (useBottomOrigin)
			{
				// Set the CSS properties of the caption.
				$('.caption', imageContainer).css({
					top: (hrefOpts.always_show_overlay ? (imageHeight - captionHeight) + 'px' : imageHeight + 'px'),
					backgroundColor: hrefOpts.overlay_color,
					color : hrefOpts.overlay_text_color
				});
				
				// Build bottom hover functionality.
				if (!hrefOpts.always_show_overlay)
				{
					if (hrefOpts.animate)
					{
						imageContainer.hover(function() {
							$('.caption', imageContainer).stop().animate({top: (imageHeight - captionHeight) + 'px'}, {queue: false, duration: hrefOpts.overlay_speed});
						}, function() {
							if (hrefOpts.overlay_speed_out != null)
								$('.caption', imageContainer).stop().animate({top: imageHeight + 'px'}, {queue: false, duration: hrefOpts.overlay_speed_out});
							else
								$('.caption', imageContainer).stop().animate({top: imageHeight + 'px'}, {queue: false, duration: hrefOpts.overlay_speed});
						});
					}
					else
					{
						imageContainer.hover(function() {
							$('.caption', imageContainer).css('top', (imageHeight - captionHeight) + 'px');
						}, function() {
							$('.caption', imageContainer).css('top', imageHeight + 'px');
						});
					}
				}
			}
			else
			{
				// Set the CSS properties of the caption.
				$('.caption', imageContainer).css({
					top: (hrefOpts.always_show_overlay ? '0px' : -captionHeight + 'px'),
					backgroundColor: hrefOpts.overlay_color,
					color : hrefOpts.overlay_text_color
				});
			
				// Build top hover functionality.
				if (!hrefOpts.always_show_overlay)
				{
					if (hrefOpts.animate)
					{
						$(imageContainer).hover(function() {
							$('.caption', imageContainer).stop().animate({top: '0px'}, {queue: false, duration: hrefOpts.overlay_speed});
						}, function() {
							if (hrefOpts.overlay_speed_out != null)
								$('.caption', imageContainer).stop().animate({top: -captionHeight + 'px'}, {queue: false, duration: hrefOpts.overlay_speed_out});
							else
								$('.caption', imageContainer).stop().animate({top: -captionHeight + 'px'}, {queue: false, duration: hrefOpts.overlay_speed});
						});
					}
					else
					{
						$(imageContainer).hover(function() {
							$('.caption', imageContainer).css('top', '0px');
						}, function() {
							$('.caption', imageContainer).css('top', -captionHeight + 'px');
						});
					}
				}
			}
		};
	};
	
	$.fn.ImageOverlay.defaults = {
		always_show_overlay : false,
		animate : true,
		border_color : '#666',
		overlay_color : '#000',
		overlay_origin : 'bottom',
		overlay_speed : 'normal',
		overlay_text_color : '#666'
	};
	
})(jQuery);

jQuery(document).ready(function() {
    if (typeof wpmp_options !== 'undefined')
    {

            console.log(wpmp_options);
            if (typeof wpmp_options.image !== 'undefined' && wpmp_options.image.class) {
                jQuery('.' + wpmp_options.image.class).magnificPopup({
                    type: 'image',
                    disableOn: typeof wpmp_options.image.disable_on !== 'undefined' ? wpmp_options.image.disable_on : 0,
                    closeOnContentClick: typeof wpmp_options.image.close_on_content_click !== 'undefined' && wpmp_options.image.close_on_content_click,
                    closeBtnInside: typeof wpmp_options.image.close_btn_inside !== 'undefined' && wpmp_options.image.close_btn_inside,
                    image: {
                        verticalFit: typeof wpmp_options.image.vertical_fit !== 'undefined' && wpmp_options.image.vertical_fit
                    },
                    zoom: {
                        enabled: typeof wpmp_options.image.zoom_enabled !== 'undefined' && wpmp_options.image.zoom_enabled,
                        duration: 300
                    }
                });
            }

            if (typeof wpmp_options.gallery !== 'undefined' && wpmp_options.gallery.class) {
                jQuery('.' + wpmp_options.gallery.class).magnificPopup({
                    closeBtnInside: typeof wpmp_options.gallery.close_btn_inside !== 'undefined' && wpmp_options.gallery.close_btn_inside,
                    disableOn: typeof wpmp_options.gallery.disable_on !== 'undefined' ? wpmp_options.gallery.disable_on : 0,
                    delegate: 'a',
                    type: 'image',
                    tLoading: wpmp_options.image_loading_text,
                    gallery: {
                        enabled: true,
                        navigateByImgClick: typeof wpmp_options.gallery.navigate_by_img_click !== 'undefined' && wpmp_options.gallery.navigate_by_img_click,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: wpmp_options.image_error_text,
                        titleSrc: function(item) {
                            return item.el.attr('title');
                        }
                    }
                });
            }

            if (typeof wpmp_options.iframe !== 'undefined' && wpmp_options.iframe.class) {
                jQuery('.' + wpmp_options.iframe.class).magnificPopup({
                    type: 'iframe',
                    disableOn: typeof wpmp_options.iframe.disable_on !== 'undefined' ? wpmp_options.iframe.disable_on : 0,
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false,
                    closeBtnInside: typeof wpmp_options.iframe.close_btn_inside !== 'undefined' && wpmp_options.iframe.close_btn_inside,
                });
            }

            if (typeof wpmp_options.div !== 'undefined' && wpmp_options.div.class) {
                jQuery('.' + wpmp_options.div.class).magnificPopup({
                    type: 'inline',
                    disableOn: typeof wpmp_options.div.disable_on !== 'undefined' ? wpmp_options.div.disable_on : 0,
                    closeBtnInside: typeof wpmp_options.div.close_btn_inside !== 'undefined' && wpmp_options.div.close_btn_inside,
                    preloader: false
                });
            }
        }
});
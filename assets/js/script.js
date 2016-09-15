(function ($, window) {

    var App = App ||
        {
            init: function () {
                $('.js-toggle-search').on('click', function () {
                    $('.js-toggle-search').toggleClass('is-active');
                    $('.js-search').toggleClass('is-visible');
                });

                $('.js-gallery').find('a').each(function () {
                    if ($(this).children('img').length) {
                        $(this).attr('rel', 'gallery');
                    }
                }).end().magnificPopup({
                    delegate: '[rel="gallery"]',
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });

                $('.js-next a').on('click', function (e) {
                    $(infinite_scroll.contentSelector).infinitescroll(infinite_scroll);

                    var $body = $('body');

                    $body.scrollTop($body.scrollTop() - 1);

                    e.preventDefault();
                })
            }
        };

    $(document).ready(function () {
        App.init();
    });
}(jQuery, window));

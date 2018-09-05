define([
    'jquery',
    'swiper'
], function($, Swiper) {
    new Swiper('.banner', {
        pagination: {
            el: '.page'
        }
    })

});
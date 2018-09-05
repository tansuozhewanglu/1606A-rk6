require.config({
    baseUrl: '/js/',
    paths: {
        jquery: 'libs/jquery-3.3.1.min',
        swiper: 'libs/swiper-4.1.6.min',

        index: 'app/index'
    }
});
require(['index']);
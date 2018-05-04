//配置  文件
require.config({
    baseUrl: "../static/js/page",
    paths: {
        "jquery": "../lib/jquery-1.10.1.min",
        "handlebars": "../lib/handlebars-v4.0.11",
        "swiper": "../lib/swiper.min",
        "zepto": "../lib/zepto.min",
        "iscroll": "../lib/iscroll",
        "text": "../lib/text",
        "ban": "../comment/banner"
    },
    shim: {
        // 'waterfall': {
        //     deps: ['jquery'],
        //     exports: 'jQuery.fn.waterfall'
        // }
    }
})
require([
    "jquery",
    "../comment/template",
    "swiper",
    "iscroll"
], function($, template, tab1, swiper, iscroll) {
    //json1
    $.ajax({
        url: "./api/get_index",
        type: "get",
        dataType: "json",
        success: function(data) {
            console.log(data);
            var navdata = data.data;
            template("#navlist", { data: navdata }, ".nav")
            $(function() {
                if ($(".navlist .nav li".index === 1)) {
                    $(".navlist .nav li").on("click", function() {
                        $(".section-box").css("transform", "translateX(-50%)");
                        $(this).css("border-bottom", "2px solid yellow");
                        $(this).siblings().css("border-bottom", "2px solid #fff")
                    })
                } else if ($(".navlist .nav li".index === 0)) {
                    $(".navlist .nav li").on("click", function() {
                        $(".section-box").css("transform", "translateX(0)");
                        $(this).css("border-bottom", "2px solid yellow");
                        $(this).siblings().css("border-bottom", "2px solid #fff")
                    })
                }
            })
        }
    })
})
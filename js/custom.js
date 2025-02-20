
$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
}); 

$(document).ready(function () {
    

        $("ul.desktop_menu_ul>li > a").on("mouseenter", function () {
            $("body").removeClass("megamenu_open");
            $(" ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
        $("header").on("mouseleave", function () {
            $("body").removeClass("megamenu_open");
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
    
    $(".header_nav").on("mouseleave", function () {
            $("body").removeClass("megamenu_open");
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
        });
    
        $("ul.desktop_menu_ul li.mega_menu>a").on("mouseenter", function () {
            if ($("body").hasClass("megamenu_open")) {
                $("body").removeClass("megamenu_open");
            } else {
                $("body").addClass("megamenu_open");
            }
            $("ul.desktop_menu_ul li.mega_menu.MM_show").removeClass("MM_show");
            $(this).closest("li").addClass("MM_show");
        });
  
});


(function($) {
    'use strict';

    function cartboxToggler() {
        var trigger = $('.block__active'),
          container = $('.block_content');


        trigger.on('click', function (e) {
          e.preventDefault();
          container.toggleClass('is-visible');
        });

        $('.close__wrap').on('click', function () {
          container.removeClass('is-visible');
        });

    }
    cartboxToggler();

})(jQuery);


    

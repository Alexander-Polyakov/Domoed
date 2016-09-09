$(document).ready(function(){
    if ($(".standard-checkbox").length > 0 ) {
        $(".standard-checkbox").styler();
    }
    if ($( ".sorting-select").length > 0 ) {
        $(".sorting-select").styler();
    }

    if ($( ".radio-checkbox").length > 0 ) {
        $(".radio-checkbox").styler();
    }
    if ($( ".b-rating__item").length > 0 ) {
        $(".b-rating__item").styler();
    }
    if ($( ".b-bank-card__select").length > 0 ) {
        $(".b-bank-card__select").styler();
    }

    if ($( ".standard-radio").length > 0 ) {
        $(".standard-radio").styler();
    }



    if ($(".datepicker-input").length > 0 ) {
        ( function( factory ) {
            if ( typeof define === "function" && define.amd ) {

                // AMD. Register as an anonymous module.
                define( [ "../widgets/datepicker" ], factory );
            } else {

                // Browser globals
                factory( jQuery.datepicker );
            }
        }( function( datepicker ) {

        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "",
            nextText: "",
            currentText: "Сегодня",
            monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
            "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
            monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
            "Июл","Авг","Сен","Окт","Ноя","Дек" ],
            dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
            dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
            dayNamesMin: [ "В","П","В","С","Ч","П","С" ],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: "" };
        datepicker.setDefaults( datepicker.regional.ru );

        return datepicker.regional.ru;

        } ) );

        $(".datepicker-input" ).datepicker();
    }


    $(document).on('click', '.b-history-orders__item__header__open-btn', function(e){
        $(this).closest(".b-history-orders").find(".b-history-orders__item__content").stop().slideUp(400);
        $(this).closest(".b-history-orders__item").find(".b-history-orders__item__content").stop().slideToggle(400);

        e.preventDefault();
    });






    $(".b-dropdown-menu").hover(function(e){
        $(this).find(".b-dropdown-menu__list").stop().fadeIn(500);
    }, function(){
        $(this).find(".b-dropdown-menu__list").stop().fadeOut(500);
    });

   $(document).on('click', '.b-site-header__mobile-menu__btn', function(e){
        $(".b-mobile-menu").addClass("active");
        $(".b-mobile-menu-overlay").fadeIn(400);
        $("body").addClass("ovh");
        e.preventDefault();
    });

    $(document).on('click', '.b-mobile-menu-overlay, .b-mobile-menu-close', function(e){
        $(".b-mobile-menu").removeClass("active");
        $(".b-mobile-menu-overlay").fadeOut(400);
        $("body").removeClass("ovh");
        e.preventDefault();
    });

    $(document).on('click', '.b-sidebar__toggle', function(e){
        $(this).closest(".b-sidebar").toggleClass("visible");
        e.preventDefault();
    });




   
   $(document).on('click', '.b-mobile-menu__cart__btn', function(e){
        $(".b-mobile-menu__cart__popup").stop().slideToggle(400);
        e.preventDefault();
    });

    $(document).on('click', '.b-checkout__switch__item', function(e){
        var this_data = $(this).data("switch");
        $("[data-switch-content]").stop().slideUp(400);
        $("[data-switch-content="+this_data+"]").stop().slideDown(400);
        e.preventDefault();
    });


    $(document).on('click', '.radio-hidden-open', function(e){
        $(this).closest(".b-radio-select").find(".b-radio-select__item__hidden-content").stop().slideUp(400);
        $(this).closest(".b-radio-select__item").find(".b-radio-select__item__hidden-content").stop().slideDown(400);
        e.preventDefault();
    });


    $(document).on('click', '.b-cart-table__td__delete', function(e){
        $(this).closest(".b-cart-table__tr").remove();
        setTimeout(function(){
           insert_number();
        },100);
        
        e.preventDefault();
    });
    function insert_number() {
        var number_item = 1;
         $(".b-cart-table__item").each(function(){
            $(this).find(".b-cart-table__td__number").text(number_item);
            number_item = number_item + 1;
        });
    }



    $(document).on('click', '[data-call-popup]', function(e){
        var this_data = $(this).data("call-popup");
        $("[data-popup="+this_data+"]").fadeIn(400);
        $("body").addClass("ovh");
        e.preventDefault();
    });

    $(document).on('click', '.popup-overlay', function(e){
        $(".popup").fadeOut(400);
        $("body").removeClass("ovh");
        e.preventDefault();
    });

    $(document).on('click', '[data-close-popup]', function(e){
        var this_data = $(this).data("close-popup");
        if (this_data != "all") {
            $("[data-popup="+this_data+"]").fadeOut(400);
        } else {
            $(".b-popup").fadeOut(400);
            $("body").removeClass("ovh");
        }

        e.preventDefault();
    });


    $(document).on('click', '.product-in-cart', function(e){
        $(".addition-product-popup").fadeOut(400);
        $(this).closest(".b-product-grid__item").find(".addition-product-popup").fadeIn(400);
        $(this).removeClass("cart-icon red-btn product-in-cart");
        $(this).addClass("check-icon green-btn");
        $(this).closest(".addition-product-popup").fadeOut(400);
        e.preventDefault();
    });

    $(document).on('click', '.addition-product-popup__close', function(e){
        $(this).closest(".addition-product-popup").fadeOut(400);
        e.preventDefault();
    });


    $(document).on('click', '.b-counter__btn', function(e){
        var step = $(this).closest(".b-counter").data("step"),
            this_input = $(this).closest(".b-counter").find(".b-counter__input"),
            value = this_input.val(),
            int_value = parseInt(value);
            
        if ($(this).hasClass("b-counter__minus") && (value < step)){
            return false;
            
        } else if ($(this).hasClass("b-counter__minus")){
            int_value = int_value - step;
        } else if ($(this).hasClass("b-counter__plus")){
            int_value = int_value + step;   
        }
        this_input.val(int_value);
    });

    sidebar_h();

    function sidebar_h() {
        var sidebar_h = $(".b-sidebar").outerHeight();
        var m_content_h = $(".b-main-content").outerHeight();


        if (sidebar_h > m_content_h ) {
            $(".b-main-content-wrapper").find(".b-main-content").css("min-height", sidebar_h);
        } else {
            $(".b-main-content-wrapper").find(".b-sidebar").css("min-height", m_content_h);
        }
        
    }



});

/*
var windowWidth = {};

function setImgContainerHgtForM() {
    var imgCwidth = Math.max($(window).width(), screen.width);
    if (windowWidth[window.screen.orientation.type] === undefined) {
        windowWidth[window.screen.orientation.type] = imgCwidth;
    }
    $(".mobile .pImgContainer .scroll").height((windowWidth[window.screen.orientation.type] / 1.52));
}

if (g_is_mobile) {
    var imgCwidth = Math.max($(window).width(), screen.width);
    $(".pImgContainer .items .imgDiv").each(function () {
        $(this).css("width", imgCwidth + "px");
    });

    setImgContainerHgtForM();
}

// function use to vertically center img
// and add a height in the img container to handle multiple images different height visual issue
function setImgContainerHeight(obj) {
    if (!g_is_mobile) {
        var icHeight = $(".pImgContainer .inner-container .imgDiv img").first().height();
        if (icHeight > 340) {
            $(".pImgContainer .inner-container").height(icHeight);
            var leftHigh = 470 - parseInt(icHeight);
            if (leftHigh > 2) {
                mTop = leftHigh / 2;
                obj.mTop = mTop;
                $(".pImgContainer .inner-container").css("margin-top", mTop + "px");
            }
        }
    }
}


function setMarginTop(obj) {
    if (!g_is_mobile) {
        $(".pImgContainer .inner-container .imgDiv").not(":first").each(function () {
            // codes to get the height of display: none element
            $(this).css("position", "absolute");
            $(this).css("visibility", "hidden");
            var imgHeight = $(this).height();
            $(this).css("position", "relative");
            $(this).css("visibility", "visible");
            var selMarginTop = (470 - parseInt(imgHeight)) / 2 - obj.mTop;
            $(this).css("margin-top", selMarginTop + "px");
        });
    }
}


var myObj = {mTop: 0};
setImgContainerHeight(myObj); // first try

$(document).ready(function () {
    setImgContainerHeight(myObj); // second try - incase image not download completely in the first try - cannot get the real height

    setTimeout(function () {
        setMarginTop(myObj); // set marginTop to each element to make them center
    }, 2000);

    if (g_is_mobile) {
        setImgContainerHgtForM();
        setTimeout(function () {
            setImgContainerHgtForM();
        }, 1000);
    }
})
;

// load all product images after window loaded
$(document).ready(function () {

    var img_count = '1' * 1;
    if (img_count == 0) {
        return;
    }

    var pImgApi = $(".pImgContainer .scroll").scrollable({
        circular: true,
        keyboard: false,
        mousewheel: false,
        touch: true
    }).navigator({navi: '.pImgSlide'}).data("scrollable");


    if (pImgApi !== undefined) {
        pImgApi.onBeforeSeek(function (event, pos) {
            var index = pos + 1;
            $(".pImgContainer .scroll .items > div:nth-of-type(" + index + ")").find("img").each(function () {
                if ($(this).attr("src") === undefined && $(this).attr("data-link")) {
                    $(this).attr("src", $(this).attr("data-link"));
                }
            });
        });
    }

    if ($(".pImgSlide").children("a").length > 1) {
        $(".pImgSlide").css("visibility", "visible");
        $(".p-arrow").css("visibility", "visible");
    }

    $(".pImgContainer .scroll").siblings(".scrollable-placeholder").hide();
    $(".pImgContainer .scroll").show();

    $(".pImgContainer .scroll .items img").each(function () {
        if ($(this).attr("src") === undefined && $(this).attr("data-link")) {
            $(this).attr("src", $(this).attr("data-link"));
        }
    });

    setImgContainerHeight(myObj); // second try - incase image not download completely in the first try - cannot get the real height

    setTimeout(function () {
        setImgContainerHeight(myObj); // third try
    }, 500);

    if (g_is_mobile) {
        setImgContainerHgtForM();
        setTimeout(function () {
            setImgContainerHgtForM();
        }, 1000);
    }

    //Codes to handle rotate
    $(window).on('orientationchange', function (e) {
        var w_width = $(window).width();
        var s_width = screen.width;
        //console.log('window width: ' + w_width + ' screen width: ' + s_width);
        var imgCwidth = s_width;                   // Math.max(w_width, s_width);
                                                   // changed to only screen.width for vp-12511.
                                                   // $(widow).width() is 480 and screen.width is 375 for iphone6. 375 is the right value
        //console.log('imgc width: ' + imgCwidth);


        // scrollable libary doesn't recalculate the left correctly when rotate
        // We need to recalculate by ourself
        var index = pImgApi.getIndex();
        var left = index * imgCwidth;
        $(".pImgContainer .items").css("left", "-" + left + "px");
        $(".pImgContainer .items div.imgDiv ").each(function () {
            $(this).css("width", imgCwidth + "px");
        });
        $(".pImgContainer .items img").each(function () {
            $(this).load();
        });
        setImgContainerHeight();
        setImgContainerHgtForM();
    });
})
;

                                            <script type="text/javascript">

                                                $(document).ready(function (){
                                                $("#optionsError").val(0);

                                                var price    = "";
                                                var quantity = 1;
                                                var buyNowBtn   = '<div  id="buynow-button" style="width:100%" data-pid="" pid="" tabIndex="0" class="primaryButton button"><div class="title-container"><p class="title">BUY NOW</p></div></div>';
                                                var waitlistBtn = '<div  class="waitlist-button js-waitlist-button primaryButton button" style="width:100%" pid="" tabIndex="0"><div class="title-container"><p class="title">WAITLIST</p></div></div>';
                                                var aqBtn       = '<div  class="request-button primaryButton button" style="width:100%" data-pid="" pid="" tabIndex="0"><div class="title-container"><p class="title">Request Quote</p></div></div>';

                                                if($('.optionProducts .customRadioBox.optionProduct').length === 1) {
                                                setTimeout(function() {
                                                $('.optionProducts .customRadioBox.optionProduct span').click();
                                            }, 1000);
                                            }
                                                $(".customRadioBox span").click(function(){
                                                $radioBox = $(this).parent();
                                                $(".errorSummary").hide();

                                                if($('.sub-prods-row').css('border-color') === "#FD6340" ||
                                                $('.sub-prods-row').css('border-color') === "rgb(253, 99, 64)")
                                            {
                                                $('.sub-prods-row').css('border-color' , '#e1e1e1');
                                                $('.sub-prods-row').css('border-top'   , 'none');
                                                $('.sub-prods-row').css('border-bottom', 'none');

                                            }

                                                if ( ! u_pickone) {
                                                $("#totalPrice").parent().show();
                                            }
                                                var pid               = $radioBox.attr('pid');
                                                pdp_productId         = pid;

                                                var $button = $(".buy-button-row");

                                                var html    = buyNowBtn;


                                                // prepare calendar based on version data
                                                if($(".schedule-button .js-schedule").length > 0 && $("#calendar-popUp").length > 0){

                                                // clear selected data if there is any
                                                $(".schedule-button .js-schedule").val("");
                                                $(".schedule-button .js-schedule-0").val("");
                                                $(".schedule-button .js-schedule-1").val("");
                                                $("#calendar-popUp .schedule-box-0 input").val("");
                                                $("#calendar-popUp .schedule-box-1 input").val("");
                                                $("#calendar-popUp .cal-body .day.selected").removeClass("selected");
                                                $("#calendar-popUp .scheduledDatetimeDisplay_0").attr("data-date","");
                                                $("#calendar-popUp .scheduledDatetimeDisplay_1").attr("data-date","");
                                                $("#calendar-popUp .cal-time .time").html("");

                                                $("#calendar-popUp").attr("data-sellerid", $radioBox.attr("sellerid"));
                                                $("#calendar-popUp").attr("data-pid", $radioBox.attr("pid"));
                                                $("#calendar-popUp").attr("data-vid", $radioBox.attr("vid"));
                                                $("#calendar-popUp").attr("data-dm", $radioBox.attr("dm"));
                                                $('#calendar-popUp').attr("data-blm", $radioBox.attr("blm"));
                                                $('#calendar-popUp').attr("data-mbld", $radioBox.attr("mbld"));
                                                $('#calendar-popUp').attr("data-mbb", $radioBox.attr("mbb"));
                                                $('#calendar-popUp').attr("data-num", $radioBox.attr("num"));
                                                $('#calendar-popUp').attr("data-oii", $radioBox.attr("oii"));
                                                draw_calendar_general($('#calendar-popUp'));
                                            }

                                                if( typeof getQunatiyDropDown !== 'undefined'){
                                                getQunatiyDropDown(pid);
                                            }



                                                acquisitionWeek = $radioBox.attr("data-acquisition");
                                                if(acquisitionWeek != ''){
                                                $("#acquisition-weeks").html(acquisitionWeek);
                                            }else{
                                                $("#acquisition-weeks").html('');
                                            }
                                                price = $radioBox.attr("price") * quantity;
                                                displayElegantGiftPresentation(price);
                                                price = addCommas(price);
                                                //$("#totalPrice").html("$" + price);

                                                $("#customRadioBoxInput").val(pid);
                                                $(".customRadioBox").removeClass("selected");
                                                $radioBox.addClass("selected");
                                                $("#totalPrice").data("initPrice", $radioBox.attr('price'));

                                                if($("#CartItemSocialInfo_numGuests").length > 0){
                                                $("#CartItemSocialInfo_numGuests").trigger('change');
                                            }

                                                updatePriceDisplay("version");

                                                $("#optionsError").val(1);

                                                /*to display appropriate buy/waitlist/request button*/
if(g_is_guest) {
    html    = buyNowBtn;
}

if($radioBox.hasClass("soldout")){
    $(".schedule-button").hide();
    if ($radioBox.attr("price") === "0.00"){
        $("#totalPrice").parent().hide();
    }
    html = waitlistBtn;


} else if($radioBox.attr("passevent") === '1') {
    html = waitlistBtn;
} else if($radioBox.attr("requestOnly") === '1') {
    $(".schedule-button").hide();
    $("#totalPrice").parent().hide();
    html = aqBtn;

} else if($radioBox.attr("schedule") === '1'){
    $(".schedule-button").show();
} else if ($radioBox.attr("price") === "0.00" && $radioBox.attr("data-gc") != 1){
    $(".schedule-button").hide();
    $("#totalPrice").parent().hide();
    html = waitlistBtn;

} else {
    $(".schedule-button").hide();
}
$html = $(html);

if(html==waitlistBtn){
    $(this).parents('.p-form').find('.bwf_info_div').hide();
}
else{
    $(this).parents('.p-form').find('.bwf_info_div').show();
}

$html.attr("pid",pid);
$html.attr("data-pid",pid);
$button.html("");
$button.append($html);
//        $(".wishlist").attr('pid', pid);
});
})
;

function displayElegantGiftPresentation(totalPrice) {
    if(totalPrice >= 1000 && !$(".giftPres").is(":visible")) {
        $(".modifiedGiftPres").show();
        $(".giftPres").hide();
    }
    else if(totalPrice >= 1000 && $(".giftPres").is(":visible")) {

    }
    else {
        $(".giftPres").hide();
        $(".modifiedGiftPres").hide();
    }
}
</script>
*/

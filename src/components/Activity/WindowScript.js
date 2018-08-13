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

                                                /!*to display appropriate buy/waitlist/request button*!/

/!*
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
*!/

/!*
ioReady(function (){
    $('#pdp-terms-dialog').find('.header-text').html("Terms & Conditions");
    $('#pdp-terms-dialog').find('.message').html(null);
    $('#content').on('click', '.js-show-terms',function(){
        $('#pdp-terms-dialog').overlay().load();
    });

    //$(".view-fp").click
    $('#content').on('click', '.product-section .view-fp',function(){
        if($(this).attr("clickaction") === "show"){
            $(this).children("span").text("hide fine print");
            $(this).children("img").attr("src","/images/io/icon_arrow_up_000.png");
            $(this).attr("clickaction","hide");
            $(this).siblings(".finePrint-sec").slideDown();
        }else{
            $(this).children("span").text("read fine print");
            $(this).children("img").attr("src","/images/io/icon_arrow_down_000.png");
            $(this).attr("clickaction","show");
            $(this).siblings(".finePrint-sec").slideUp();
        }

    });
});


                                var stopLoading = false;
                                var share_pId = "325";
                                var share_pUrl = "https://www.ifonly.com/w/product/325/i/0/0/0";
                                var share_pName = "Weekend plans ? Sign up for the @IfOnly Supper in the Kitchen at Chez Panisse with me
                            !";


                                $(document).ready(function (){
                                var pos = !isHandheld();
                                $("#sweepstake-share-dialog").overlay({
                                top: 'center', left: getPopupLeftToCenter("sweepstake-share-dialog"), fixed: pos, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5}
                            });

                                $('.sweepstakeShareText').on('keydown keyup', function(e) {
                                var message = $(this);

                                if(message.val().length === 80 && !$('.js-share-text-error').is(':visible')) {
                                $('.js-share-text-error').show();
                                e.preventDefault();
                            } else if($('.js-share-text-error').is(':visible') && message.val().length < 80) {
                                $('.js-share-text-error').hide();
                            }
                            });
                            })
                            ;


                                $(document).ready(function (){
                                var pos = !isHandheld();

                                function getGmailContacts() {
                                stopLoading = false;
                                var authResult = false;
                                var scopes = 'https://www.google.com/m8/feeds';
                                var config = {
                                'client_id': g_googleClientKey,
                                'scope': scopes
                            };
                                gapi.auth.authorize(config, function(data) {
                                authResult = gapi.auth.getToken();
                                $("#sweepstake-email-share-list").html("");
                                $.get("https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=" + authResult.access_token + "&max-results=700&v=3.0",
                                function(response){
                                $("#sweepstake-email-share-dialog").overlay().close();
                                $("#sweepstake-email-share-loading-dialog").overlay().load();
                                loading('20%');
                                if (stopLoading) return;
                                if(response.feed.entry !== undefined && response.feed.entry.length > 0){
                                var cnt = response.feed.entry.length;
                                for ( var i= 0 ; i < cnt; i++) {
                                if ( i % 10 === 0) {
                                if (stopLoading) return;
                                loading( Math.round((20 + ((i/cnt)) * 80)) + '%');
                            }
                                if(response.feed.entry[i].gd$phoneNumber){
                                continue;
                            } else{
                                $("#sweepstake-email-share-list").append('<li><span></span><p>' + response.feed.entry[i].gd$email[0].address + '</p></li>');
                            }
                            }
                                loading('100%');
                            } else {
                                alertEx('No contacts were found.');
                            }
                            }
                                );
                            });
                            }
                                function loading(percent){
                                $('.progress span').animate({width:percent},500,function(){
                                $('.progress-percentage').html(percent);
                                if (percent === '100%'){
                                $('.progress-percentage').html('Loading Complete');
                                setTimeout(function(){
                                $("#sweepstake-email-share-loading-dialog").overlay().close();
                                loading('0%');
                                if ( ! stopLoading ) {
                                $("#sweepstake-email-share-list-dialog").overlay().load();
                            }
                            },1000);
                            }
                            });
                            }

                                $("#sweepstake-email-share-loading-cancel").click(function(){
                                stopLoading = true;
                                $("#sweepstake-email-share-loading-dialog").overlay().close();
                            });

                                $("#sweepstake-email-share-import-button").click(function(){
                                var email = "";
                                $("#sweepstake-email-share-list li").each(function(){
                                if ($(this).hasClass('selected')) {
                                email = email + $(this).children('p').html() + ', ';
                            }
                            });
                                $("#sweepstake-email-share-dialog2 .sweepstakeShareWith").val(email);
                                $("#sweepstake-email-share-list-dialog").overlay().close();
                                $("#sweepstake-email-share-dialog2").overlay().load();
                            });

                                $("#sweepstake-email-share-select-all").click(function(){
                                if ($(this).hasClass('selected')) {
                                $(this).removeClass('selected');
                                $("#sweepstake-email-share-list li").removeClass('selected');
                            } else {
                                $(this).addClass('selected');
                                $("#sweepstake-email-share-list li").addClass('selected');
                            }
                            });

                                $("#sweepstake-email-share-list").on('click', 'li',function(){
                                if ($(this).hasClass('selected')) {
                                $(this).removeClass('selected');
                            } else {
                                $(this).addClass('selected');
                            }
                            });

                                $("#sweepstake-import-gmail").click(function(){
                                getGmailContacts();
                                return false;
                            });
                                $("#sweepstake-share-dialog").appendTo("body");
                                $("#sweepstake-email-share-dialog").appendTo("body");
                                $("#sweepstake-email-share-dialog2").appendTo("body");
                                $("#sweepstake-email-share-loading-dialog").appendTo("body");
                                $("#sweepstake-email-share-list-dialog").appendTo("body");

                                if(typeof($("#sweepstake-share-dialog").overlay) === typeof(Function)){
                                $("#sweepstake-share-dialog").overlay({
                                top: 'center', fixed: true, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5},
                                onLoad: function(){
                                ga('send', 'event', 'Sweepstake Activity', 'Sweepstake Activity - Share');
                                ga('send', 'pageview', 'Sweepstake Share Dialog');
                                $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
                            }
                            });

                                $("#sweepstake-email-share-dialog").overlay({
                                top: 'center', fixed: true, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5},
                                onLoad: function(){
                                ga('send', 'event', 'Sweepstake Activity', 'Sweepstake Activity - Email Share');
                                ga('send', 'pageview', 'Sweepstake Email Share Dialog');
                                $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
                            }
                            });

                                $("#sweepstake-email-share-dialog2").overlay({
                                top: 'center', fixed: true, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5},
                                onLoad: function(){
                                ga('send', 'event', 'Sweepstake Activity', 'Sweepstake Activity - Email Share');
                                ga('send', 'pageview', 'Sweepstake Email Share Dialog');
                                $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
                            }
                            });

                                $("#sweepstake-email-share-loading-dialog").overlay({
                                top: 'center', fixed: true, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5},
                                onLoad: function(){
                            }
                            });

                                $("#sweepstake-email-share-list-dialog").overlay({
                                top: 'center', fixed: true, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5},
                                onLoad: function(){
                                ga('send', 'event', 'Sweepstake Activity', 'Sweepstake Activity - Email Share Contact List');
                                ga('send', 'pageview', 'Sweepstake Email Share List Dialog');
                                $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
                            }
                            });
                            }
                                function checkEmailAddressList(emailAddressList, form) {
                                $(form + " .errorSummary").hide();
                                var emails = emailAddressList.split(",");
                                var wrongEmails = [];
                                $.each(emails,function(i, email){
                                email = $.trim(email);
                                if ( email !== "" && ! validateEmail(email) ) {
                                wrongEmails.push(email);
                            }
                            });

                                if (wrongEmails.length > 0 ) {
                                var message = "Please check folowing emails and try again." + "<br><br><ul><li>" + wrongEmails.join('</li><li>') + '</li></ul>';
                                displayError( form + " .errorSummary", message);
                                return false;
                            }

                                var validEmails = [];
                                $.each(emails,function(i, email){
                                email = $.trim(email);
                                if ( email !== "" ) {
                                validEmails.push(email);
                            }
                            });

                                if (validEmails.length === 0 ) {
                                displayError( form + " .errorSummary", "Please enter email address.");
                                return false;
                            }

                                return true;
                            }
                                $('#sweepstake-email-share-button, #sweepstake-email-share-button2').click(function(){
                                $(this).closest('.overlay').find('.errorSummary').hide();
                                var shareWith = $(this).closest('.overlay').find(".sweepstakeShareWith");
                                var shareText = $(this).closest('.overlay').find(".sweepstakeShareText");
                                if (shareWith.val() === "") {
                                displayError(".sweepstake-share-form:visible .errorSummary", "Please enter at least one email address.");
                                return false;
                            }

                                if(grecaptcha.getResponse().length === 0 && $('#g-recaptcha-response-1').val().length === 0) {
                                displayError(".sweepstake-share-form:visible .errorSummary", "Please click checkbox to confirm you are not a robot.");
                                return false;
                            }

                                if (! checkEmailAddressList(shareWith.val(), "#" + $(this).closest('.overlay').attr('id') + " .sweepstake-share-form")) {
                                return false;
                            }

                                var dataArr = {};
                                var ajaxUrl = '';
                                var captcha = grecaptcha.getResponse();
                                if (captcha.length === 0) {
                                captcha = $('#g-recaptcha-response-1').val();
                            }
                                if(typeof share_pId !== 'undefined') {
                                ajaxUrl = '/website/sendShareEmail';
                                dataArr = {productId: share_pId,
                                url      : encodeURIComponent(share_pUrl + '/s/8324'),
                                email    : shareWith.val(),
                                message  : shareText.val(),
                                captcha  : captcha
                            };
                            } else {
                                ajaxUrl = '/website/sendShareWishlistEmail';
                                dataArr =   {email   : shareWith.val(),
                                message  : shareText.val(),
                                captcha  : captcha
                            };
                            }
                                if(ajaxUrl !== '') {
                                $.post(ajaxUrl, dataArr,
                                function(data){
                                if(data.result === 1) {
                                alertEx("Share email will be sent to your friend(s) shortly.");
                                shareWith.val('');
                                shareText.val('');
                            } else {
                                alertEx(data.msg);
                            }
                            }, 'json'
                                );
                            }
                                return false;
                            });

                                $('.sweepstake-share-by-facebook').click(function(){
                                if (g_is_guest) {
                                $("#signUp-dialog-called-from").val("sweepstake-share");
                                signupDialog(1,false);
                            } else {
                                facebookShare(share_pId, share_pUrl + '/langId/1' + '/s/8320', share_pName);
                                $('#sweepstake-share-dialog').overlay().close();
//            FB.login(function(response) {
//                if (response.authResponse) {
//                    facebookShare(share_pId, share_pUrl, share_pName);
//                    $('#sweepstake-share-dialog').overlay().close();
//                    alertEx('Thanks for sharing.');
//                }
//            }, {scope:'email, user_birthday, user_photos'});
                            }
                                return false;
                            });

                                $('.sweepstake-share-by-twitter').click(function(){
                                if (g_is_guest) {
                                $("#signUp-dialog-called-from").val("sweepstake-share");
                                signupDialog(1,false);
                                return false;
                            } else {
                                twitterShare(325);
                            }
                            });

                                $('.sweepstake-share-by-email, .js-share-wishlist').click(function() {
                                if($(this).hasClass('js-share-wishlist') && $('ul#wishlist').find('li').length === 0) {
                                alertEx("There are no products in your wishlist to share.");
                                return false;
                            }

                                if (g_is_guest) {
                                if($(this).hasClass('sweepstake-share-by-email')) {
                                $("#signUp-dialog-called-from").val("sweepstake-share");
                            }
                                signupDialog(1,false);
                            } else {
                                if($("#sweepstake-share-dialog").length > 0) {
                                $("#sweepstake-share-dialog").overlay().close();
                            }
                                if($(this).hasClass('sweepstake-share-by-email')) {
                                $('#sweepstake-email-share-dialog h5.section-header').text("Share this through Email");
                                $('#sweepstake-email-share-dialog #sweepstake-email-share-button .title').text("SHARE THIS EXPERIENCE");
                                $('#sweepstake-email-share-dialog2 h5.section-header').text("Share this through Email");
                                $('#sweepstake-email-share-dialog2 #sweepstake-email-share-button2 .title').text("SHARE THIS EXPERIENCE");
                            } else if($(this).hasClass('js-share-wishlist')) {
                                $('#sweepstake-email-share-dialog h5.section-header').text("Share Your Wishlist");
                                $('#sweepstake-email-share-dialog #sweepstake-email-share-button .title').text("Share Your Wishlist");
                                $('#sweepstake-email-share-dialog2 h5.section-header').text("Share Your Wishlist");
                                $('#sweepstake-email-share-dialog2 #sweepstake-email-share-button2 .title').text("Share Your Wishlist");
                            }
                                grecaptcha.reset();
                                $("#sweepstake-email-share-dialog").overlay().load();
                            }
                                return false;
                            });

                                $("#sweepstake-import-yahoo").click(function(){
                                getYahooContacts();
                                return false;
                            });
                            })
                            ;
                            </script>


                            <script type="text/javascript">

                                var stopLoading = false;
                                var share_pId = "325";
                                var share_pUrl = "https://www.ifonly.com/w/product/325/i/0/0/0";
                                var share_pName = "Weekend plans ? Sign up for the @IfOnly Supper in the Kitchen at Chez Panisse with me
                            !";


                                $(document).ready(function (){
                                var pos = !isHandheld();
                                $("#sweepstake-share-dialog").overlay({
                                top: 'center', left: getPopupLeftToCenter("sweepstake-share-dialog"), fixed: pos, closeOnClick: true,
                                mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5}
                            });

                                $('.sweepstakeShareText').on('keydown keyup', function(e) {
                                var message = $(this);

                                if(message.val().length === 80 && !$('.js-share-text-error').is(':visible')) {
                                $('.js-share-text-error').show();
                                e.preventDefault();
                            } else if($('.js-share-text-error').is(':visible') && message.val().length < 80) {
                                $('.js-share-text-error').hide();
                            }
                            });
                            })
                            ;

                                var callFrom = 1; // 1 - PDP
                                // 2 - CART
                                // 3 - ORDER History - to do list


                                var scheduleMode = g_infobox_modes.edit; // EDIT
                                // EXE
                                var currentOii = 0;
                                $('body').append($("#product-scheduling-dialog"));
                                if (g_is_mobile){
                                $("#product-scheduling-dialog").addClass("mobile");
                            }
                                $('#calendar-popUp .
                            cal - nav .
                            left img
                            ').css("visibility","hidden");

                                $(document).ready(function (){

                                if(callFrom === 3){
                                $(".order_list_container, #todo-list-detail, .user_input_delegate_container").on("click", ".schedule-button, .decline.NegotiateSchedulePicker", function(){
                                if(callFrom !== 1){

                                // MODE check
                                if($(this).hasClass("decline")){
                                scheduleMode = g_infobox_modes.exe;
                            }else{
                                scheduleMode = g_infobox_modes.edit;
                            }

                                // do not allow customer to choose new date if they decline series of event date change
                                if($(this).closest('.p-form').find('.infobox_mode_div.edit').data('mode') === 'u' && $(this).closest('.p-form').attr("data-series-events")) {
                                $(this).addClass('selected');
                                infobox_update_exe_mode_decision_btn_status($(this).closest('.p-form').find('.infobox_mode_div.exe'));
                                return false;
                            }

                                var thisOii = $(this).closest('.p-form').attr("data-oii");
                                $("#calendar-popUp").attr("data-sellerid",$(this).closest('.p-form').attr("data-sellerid"));
                                $("#calendar-popUp").attr("data-pid",  $(this).closest('.p-form').attr("data-pid"));
                                $("#calendar-popUp").attr("data-vid",  $(this).closest('.p-form').attr("data-vid"));
                                $("#calendar-popUp").attr("data-dm",   $(this).closest('.p-form').attr("data-dm"));
                                $('#calendar-popUp').attr("data-blm",  $(this).closest('.p-form').attr("data-blm"));
                                $('#calendar-popUp').attr("data-mbld", $(this).closest('.p-form').attr("data-mbld"));
                                $('#calendar-popUp').attr("data-mbb",  $(this).closest('.p-form').attr("data-mbb"));
                                $('#calendar-popUp').attr("data-num",  $(this).closest('.p-form').attr("data-num"));
                                $('#calendar-popUp').attr("data-oii",  thisOii);

                                $('#calendar-popUp').attr("data-callFrom", $(this).closest('.p-form').attr("data-callFrom"));
                                $('#calendar-popUp').attr("data-nfad", 1);
                                $("#calendar-popUp .scheduling-productId").val($(this).closest('.p-form').attr("data-pid"));
                                $("#calendar-popUp .scheduling-number").val($(this).closest('.p-form').attr("data-num"));

                                // need this data for post booking series date change
                                $('#calendar-popUp').attr("data-series-events",  $(this).closest('.p-form').attr("data-series-events"));
                                $('#calendar-popUp').attr("data-master-pid",  $(this).closest('.p-form').attr("data-master-pid"));
                                $('#calendar-popUp').attr("data-quantity",  $(this).closest('.p-form').prev().find('.quantity span').html());

                                var dialogHeader    = "Suggest a Date and Time";
                                var dialogSubHeader = '';
                                if($('#calendar-popUp').attr("data-series-events") === "1" && $('#calendar-popUp').attr("data-master-pid") != "0") {
                                dialogHeader    = "Event Date Exchange";
                                dialogSubHeader = "Select a new date for this experience from the calendar below. The exchange is not final until your customer accepts.";
                            }
                                $('.js-dialog-header').html(dialogHeader);
                                $('.js-dialog-series-date-switch').html(dialogSubHeader);

                                if(currentOii === 0 || currentOii !== thisOii){       // first time loading this oii, reset override/postpone defaule
                                currentOii = thisOii;
                                $('#calendar-popUp .cal-wrapper').show();
                                $('#calendar-popUp .schedule-box.schedule-box-0').show();
                                $('#calendar-popUp .js-reset-booking').removeClass('select');
                                $('#calendar-popUp .availability_override_div').find('.availability_override_div_cancel').hide();
                                $('#calendar-popUp .availability_override_div').find('.availability_override_div_req').show();
                                $('#calendar-popUp').attr('data-avail-override', 0);
                            }

                                draw_calendar_general($('#calendar-popUp'));
                                // postpone
                                var masterPid = $('#calendar-popUp').attr("data-master-pid");
                                if(callFrom === 3 && $(this).closest('.p-form').find('.infobox_mode_div.exe').attr("data-mode") === 'v' && $(this).closest('.p-form').find('.infobox_mode_div.exe').attr("data-booking") === 'post'
                                && $('#calendar-popUp').attr("data-series-events") != "1" &&  masterPid <= '1'
                                ){
                                $('#calendar-popUp .infobox_reset_booking_container.pre_booking').hide();
                                $('#calendar-popUp .infobox_reset_booking_container.post_booking').show();
                            }
                                //else if(callFrom === 3 && $(this).closest('.p-form').find('.infobox_div.exe').attr("data-mode") === 'v' && $(this).closest('.p-form').find('.infobox_mode_div.exe').attr("data-booking") === 'pre'){
                                else if(callFrom === 3 && $(this).closest('.infobox_mode_div').hasClass("exe") && $(this).closest('.infobox_mode_div.exe').attr("data-mode") === 'v' && $(this).closest('.infobox_mode_div.exe').attr("data-booking") === 'pre'){
                                console.log($('#calendar-popUp'));
                                $('#calendar-popUp .infobox_reset_booking_container.post_booking').hide();
                                $('#calendar-popUp .infobox_reset_booking_container.pre_booking').show();
                            }
                                else{
                                $('#calendar-popUp .infobox_reset_booking_container.post_booking').hide();
                                $('#calendar-popUp .infobox_reset_booking_container.pre_booking').hide();
                                $('#calendar-popUp .infobox_reset_booking_container').hide();
                                $('#calendar-popUp .schedule-box.schedule-box-0').show();
                                $('#calendar-popUp .cal-wrapper').show();
                                $('#calendar-popUp .js-reset-booking').removeClass('select');
                            }
                                // override
                                if(callFrom === 3 && $(this).closest('.p-form').find('.infobox_mode_div.exe').attr("data-mode") === 'v' && $(this).closest('.p-form').attr("data-oii") > 0
                                && $('#calendar-popUp').attr("data-series-events") != "1" &&  masterPid <= '1'
                                ){
                                $('#calendar-popUp .availability_override_div').show();
                            }
                                else{
                                $('#calendar-popUp .availability_override_div').hide();

                            }
                            }


                                $("#product-scheduling-dialog").overlay().load();

                                return false;
                            });
                            }else{
                                $(".schedule-button").click(function(){

                                if(callFrom === 1){

                                if($(this).hasClass("js-series-time")){
                                seriesEventErrorClear(); // function defined in _preCheckoutForm_js
                            }

                                if($(".customRadioBox").length > 0){
                                if($(".customRadioBox.selected").length === 0){
                                if(g_is_mobile){
                                $(".errorSummary").html("Please select an option");
                                $(".errorSummary").css('display', 'block');
                                setTimeout('$(".errorSummary").hide();', 5000);
                            }else{
                                //Display Error Message and make border red
                                $('.sub-prods-row').css('border', '1px solid #FD6340');
                                $(".errorSummary").css('display', 'block');
                            }
                                return false;
                            }
                            }

                            }else{

                                var timeValue = "";
                                var scheduleVal = $(this).find(".js-date-1").val();
                                var mappingDate = "";
                                if( scheduleVal !== ""){
                                var d       = new Date(scheduleVal);
                                var mon     = d.getMonth()+1;
                                mon = mon.toString();
                                var year    = d.getFullYear();
                                var date    = d.getDate();
                                date = date.toString();
                                mappingDate = year.toString() + ((mon.length === 1) ? "0" + mon : mon) + ((date.length === 1) ? "0"+date : date);

                                $('#calendar-popUp').attr("data-start-year",  year);
                                $('#calendar-popUp').attr("data-start-month",  mon);
                                timeValue  = scheduleVal.slice(-8);
                            }else{
                                $('#calendar-popUp').attr("data-start-year",  "");
                                $('#calendar-popUp').attr("data-start-month",  "");
                            }

                                $("#calendar-popUp").attr("data-sellerid",$(this).closest('.p-form').attr("data-sellerid"));
                                $("#calendar-popUp").attr("data-pid",  $(this).closest('.p-form').attr("data-pid"));
                                $("#calendar-popUp").attr("data-vid",  $(this).closest('.p-form').attr("data-vid"));
                                $("#calendar-popUp").attr("data-dm",   $(this).closest('.p-form').attr("data-dm"));
                                $('#calendar-popUp').attr("data-blm",  $(this).closest('.p-form').attr("data-blm"));
                                $('#calendar-popUp').attr("data-mbld", $(this).closest('.p-form').attr("data-mbld"));
                                $('#calendar-popUp').attr("data-mbb",  $(this).closest('.p-form').attr("data-mbb"));
                                $('#calendar-popUp').attr("data-num",  $(this).closest('.p-form').attr("data-num"));
                                $('#calendar-popUp').attr("data-oii",  $(this).closest('.p-form').attr("data-oii"));
                                $('#calendar-popUp').attr("data-series-events",  $(this).closest('.p-form').attr("data-series-events"));
                                $('#calendar-popUp').attr("data-nfad", 1);
                                $('#calendar-popUp').attr("data-callFrom", $(this).closest('.p-form').attr("data-callFrom"));
                                $("#calendar-popUp .scheduling-productId").val($(this).closest('.p-form').attr("data-pid"));
                                $("#calendar-popUp .scheduling-number").val($(this).closest('.p-form').attr("data-num"));

                                if(timeValue !== "" && mappingDate !== "" ){
                                console.log(timeValue);
                                console.log(mappingDate);
                                draw_calendar_general($('#calendar-popUp'), function(){}, function(){
                                console.log(mappingDate);
                                console.log($('#calendar-popUp').find(".cal-day-box.day.active[data-date="+mappingDate+"]"));
                                $('#calendar-popUp').find(".cal-day-box.day.active[data-date="+mappingDate+"]").click();
                                setTimeout(function(){$('#calendar-popUp').find(".dateTimeRange option[data-val='"+timeValue+"']").attr("selected","seleted");}, 1000);
                            });
                            }else{
                                draw_calendar_general($('#calendar-popUp'));
                            }
                            }


                                $("#product-scheduling-dialog").overlay().load();

                                return false;
                            });
                            }


                                // $("#scheduling-dialog").appendTo("#content"); // do not move this scheduling dialog to outside. It's part of product detail form.'
                                var fixed = false;
                                //var pos = !isHandheld();
                                var top   = 50;
                                var left  = 'center';

                                if(g_is_mobile){
                                fixed = true;
                                top   = 0;
                                left  = 'center';
                                //$("#calendar-popUp").append("<style>#calendar-popUp .cal-day-box{width: "+"</style>")
                                //alert($("#calendar-popUp .week.first").width());
                            }

                                $("#product-scheduling-dialog").overlay({
                                top: getPopupTopToCenter("product-scheduling-dialog"), left: getPopupLeftToCenter("product-scheduling-dialog"), fixed: fixed, closeOnClick: false,
                                mask: {color: '#000000', loadSpeed: 200, opacity: 0.5},
                                onClose: function() {

                                if ($("#calendar-popUp .schedule-box .Schedule_date_0").val() !== 'mm/dd/yyyy' ||
                                $("#calendar-popUp .schedule-box .Schedule_date_1").val() !== 'mm/dd/yyyy'){
                                $(".schedule-button img").attr('src', '/images/io/icon_calendar_999.png');
                            } else {
                                $(".schedule-button img").attr('src', '/images/schedule_button_io.png');
                            }

                            },
                                onBeforeClose: function(){
                                if(g_is_mobile){
                                releaseBodyHeight();
                                $('html, body').animate({scrollTop:g_currentPosTop}, 0, function(){
                                console.log(g_currentPosTop);
                            });
                            }
                            },
                                onBeforeLoad:function(){
                                if($("#calendar-popUp .cal-day-box.day.selected").length === 2 && callFrom === 1){
                                $(".scheduling-submit").show();
                            }else{
                                $("#calendar-popUp .schedule-box-0").addClass("current");
                                $("#calendar-popUp .schedule-box-1").removeClass("current");
                                $("#calendar-popUp .schedule-box-1").hide();

                                if(callFrom === 1){
                                // always reset calendar -- commentted to keep the date values on the popup after saved/closed
                                //$("#calendar-popUp .schedule-box-0 input").val("");
                                //$("#calendar-popUp .schedule-box-1 input").val("");
                                //$("#calendar-popUp .cal-body .day.selected").removeClass("selected");
                                //$("#calendar-popUp .cal-time .time").html("");
                            }else{
                                // may have multiple shcedule widgets.
                                // need to clean data before overlay displaying
                                $("#calendar-popUp .schedule-box-0 input").val("");
                                $("#calendar-popUp .schedule-box-1 input").val("");
                                $("#calendar-popUp .cal-body .day.selected").removeClass("selected");
                                $("#calendar-popUp .cal-time .time").html("");
                            }

                                $("#product-scheduling-dialog .explanation").hide();
                                $(".scheduling-submit").show();
                                $(".scheduling-next-choice").hide();

                                /!*
                                if($("#calendar-popUp").attr("data-sellerid") == 0){    // always hide the explanation box if it is marketplace products
                                    $("#product-scheduling-dialog .explanation").show();
                                    $(".scheduling-submit").hide();
                                    $(".scheduling-next-choice").show();
                                }else{
                                    $("#product-scheduling-dialog .explanation").hide();
                                    $(".scheduling-submit").show();
                                    $(".scheduling-next-choice").hide();
                                }
}

if(scheduleMode === g_infobox_modes.exe){
    $("#product-scheduling-dialog .js-schedule-save-btns").hide();
    $("#product-scheduling-dialog .js-schedule-action-btns").show();
}else{
    $("#product-scheduling-dialog .js-schedule-save-btns").show();
    $("#product-scheduling-dialog .js-schedule-action-btns").hide();
}

if(g_is_mobile){
    $("#exposeMask").hide();
    g_currentPosTop = $(window).scrollTop();
    fixBodyHeightToScreenHeight();
}

//            if($(".cal-day-box.day.active.selected").length > 0){
//                $(".cal-day-box.day.active.selected").trigger("click");
//            }

},
onLoad: function() {
    if(g_is_mobile){
        $("#exposeMask").hide();
        $('html, body').animate({scrollTop:0}, 0, function(){

        });
    }


    // /admin do not have ga defined
    if(typeof ga !== 'undefined'){
        ga('send', 'pageview', 'Scheduling Dialog on Products Load');
        $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
    }

}
});



$('#product-scheduling-dialog .close').click(function(){

    if(callFrom !== 1){
        if($(".schedule-button.preCheckOutField").length !== 0 && $(".schedule-button.preCheckOutField input.calender-field").val() !== ""){

        }else{
            $("#calendar-popUp .schedule-box .Schedule_date_0").val("");
            $("#calendar-popUp .schedule-box .Schedule_date_1").val("");
            $("#calendar-popUp .Schedule_date_1").val("");
            $("#calendar-popUp .Schedule_date_0").val("");
            $("#calendar-popUp .cal-day-box").removeClass("selected");
        }
    }else{
        // for pdp, keep the dates selected
        //$("#calendar-popUp .schedule-box .Schedule_date_0").val("");
        //$("#calendar-popUp .schedule-box .Schedule_date_1").val("");
        //$("#calendar-popUp .Schedule_date_1").val("");
        //$("#calendar-popUp .Schedule_date_0").val("");
        //$("#calendar-popUp .cal-day-box").removeClass("selected");
    }

    // scroll to the original position in mobile when close popUp
    if(g_is_mobile){
        releaseBodyHeight();
        $('html, body').animate({scrollTop:g_currentPosTop}, 0, function(){
            console.log(g_currentPosTop);
        });
    }
});

//Switch AM/PM block and set the value in the ampm dropdown


$("#calendar-popUp").on("click",".schedule-box-0", function(){
    $("#calendar-popUp .schedule-box-0").addClass("current");
    $("#calendar-popUp .schedule-box-1").removeClass("current");
});

$("#calendar-popUp").on("click",".schedule-box-1", function(){
    $("#calendar-popUp .schedule-box-1").addClass("current");
    $("#calendar-popUp .schedule-box-0").removeClass("current");
});

$("#calendar-popUp").on('click',".scheduling-next-choice", function(){
    $("#calendar-popUp .schedule-box-0").removeClass("inputBoxError");
    $("#calendar-popUp .errorMessage").hide();
    if($("#calendar-popUp .schedule-box-0 .Schedule_date_0").val() === ""){
        return false;
    }

    //Mark error if no time
    if($("#calendar-popUp .schedule-box-0 .cal-time-0 option:selected").val() === ""){
        $("#calendar-popUp .schedule-box-0").addClass("inputBoxError");
        $("#calendar-popUp .errorMessage").show();
        return false;
    }

    //$("#calendar-popUp .cal-time .time").html("");
    $(this).hide();
    $(".scheduling-submit").show();
    $("#calendar-popUp .schedule-box-1").show();
    $("#calendar-popUp .schedule-box-0").removeClass("current");
    $("#calendar-popUp .schedule-box-1").removeClass("hide-second-date");
    $("#calendar-popUp .schedule-box-1").addClass("current");
    $("#calendar-popUp .scheduling-submit-wrapper").removeClass("submit-inactive");
    if( $("#calendar-popUp .schedule-box .Schedule_date_1").val() === '' &&
        $("#calendar-popUp .schedule-box-1").hasClass("current")){
        $("#product-scheduling-dialog .explanation").show();
    }

    // scroll to bottom to let the second choice input box visible
    if(g_is_mobile){
        $('#product-scheduling-dialog').animate({scrollTop:1000}, 0, function(){
            console.log("sssd");
        });
    }
    return false;
});

$("#calendar-popUp .schedule-box .date input").blur(function(){
    setSelectedDay();
});

//    $("#calendar-popUp .schedule-box .Schedule_date_0").focus(function(){
//        $("#calendar-popUp .schedule-box-1").removeClass("current");
//        $("#calendar-popUp .schedule-box-0").addClass("current");
//    });
//    $("#calendar-popUp .schedule-box .Schedule_date_1").focus(function(){
//        $("#calendar-popUp .schedule-box-0").removeClass("current");
//        $("#calendar-popUp .schedule-box-1").addClass("current");
//    });

$("#calendar-popUp .scheduling-submit, #calendar-popUp .js-propose").click(function(){
//        if ( ! isValidSchedule(0)) return false;
//        if ( ! isValidSchedule(1)) return false;

    if(callFrom === 3){
        if($('.js-reset-booking.postbooking').hasClass('select')){  // check for 'reset checkbox'...
            saveDateToTextField('reset_postbooking');
            return false;
        }
        if($('.js-reset-booking.prebooking').hasClass('select')){  // check for 'reset checkbox'...
            saveDateToTextField('reset_prebooking');
            return false;
        }
    }

    var selectedDate = "";
    clearErrorMessage(".schedule-button .calender-field");
    $("#calendar-popUp .schedule-box-1").removeClass("inputBoxError");
    $("#calendar-popUp .errorMessage").hide();
    $("#calendar-popUp .errorMessage2").hide();

    if($("#calendar-popUp .schedule-box .Schedule_date_0").val() !== "" &&
        $("#calendar-popUp .schedule-box-0 .cal-time-0 option:selected").val() === ""){
        $("#calendar-popUp .schedule-box-0").addClass("inputBoxError");
        $("#calendar-popUp .errorMessage").show();
        return false;
    }

    if($("#calendar-popUp .schedule-box .Schedule_date_1").val() !== "" &&
        $("#calendar-popUp .schedule-box-1 .cal-time-1 option:selected").val() === ""){
        $("#calendar-popUp .schedule-box-1").addClass("inputBoxError");
        $("#calendar-popUp .errorMessage").show();
        return false;
    }

    var currentTime = new Date().getTime();

    if($("#calendar-popUp .schedule-box .Schedule_date_0").val() !== "" &&
        $("#calendar-popUp .schedule-box .cal-time-0 .time select option:selected").val() !== '')
    {
        var tempDate = new Date($("#calendar-popUp .schedule-box .Schedule_date_0").val() + ' ' + $("#calendar-popUp .schedule-box .cal-time-0 .time select option:selected").attr('data-val'));
        if(Math.abs(currentTime) > Math.abs(tempDate.getTime())) {
            $("#calendar-popUp .errorMessage2").show();
            return false;
        }
    }

    if($("#calendar-popUp .schedule-box .Schedule_date_1").val() !== "" &&
        $("#calendar-popUp .schedule-box .cal-time-1 .time select option:selected").val() !== '')
    {
        var tempDate = new Date($("#calendar-popUp .schedule-box .Schedule_date_1").val() + ' ' + $("#calendar-popUp .schedule-box .cal-time-1 .time select option:selected").attr('data-val'));
        if(Math.abs(currentTime) > Math.abs(tempDate.getTime())) {
            $("#calendar-popUp .errorMessage2").show();
            return false;
        }
    }

    if($("#calendar-popUp .schedule-box .Schedule_date_0").val() !== ""){
        var temp = $("#calendar-popUp .schedule-box .Schedule_date_0").val() +  " " + $("#calendar-popUp .schedule-box .cal-time-0 .time select option:selected").html();  //.val()
        selectedDate += temp;
    }

    if($("#calendar-popUp .schedule-box .Schedule_date_1").val() !== ""){
        var temp = $("#calendar-popUp .schedule-box .Schedule_date_1").val() + " " + $("#calendar-popUp .schedule-box .cal-time-1 .time select option:selected").html();    //.val()
        selectedDate += " | " + temp;
    }

    if($("#calendar-popUp .schedule-box .Schedule_date_0").val() !== ""){
        if(callFrom === 1){// if call from PDP
            $(".schedule-button .optional").hide();
            $("#product-scheduling-dialog").overlay().close();

            if($("#calendar-popUp").attr("data-display-price") !== undefined){
                $("#totalPrice").text($("#calendar-popUp").attr("data-display-price"));

                // need to update hyatt points for price change if world of hyatt member
                if($('.hyatt-points-sec').length > 0) {
                    var points = g_locale.formatNumber(calculateHyattPointsConversion($("#calendar-popUp").attr("data-unit-price")), false, false, false);
                    $('.hyattTotalPoints').html(points);
                }
                $("#totalPrice").attr("data-unit-price", $("#calendar-popUp").attr("data-unit-price"));
            }

            if($("#calendar-popUp").attr("data-event-pid") !== undefined){
                getQunatiyDropDown($("#calendar-popUp").attr("data-event-pid"));
            }

            $("div.schedule-button input.js-schedule").val(selectedDate);
            $("div.schedule-button input.js-date-1").val($("#product-scheduling-dialog .scheduledDatetimeDisplay_0").val());
            $("div.schedule-button input.js-date-2").val($("#product-scheduling-dialog .scheduledDatetimeDisplay_1").val());

            if(getPageName() === 'bwfsetup' ){
                var productId = $('#productId').val();
                var date = $("#product-scheduling-dialog .scheduledDatetimeDisplay_0").val();
                var cal_popup = $("#product-scheduling-dialog #calendar-popUp");
                var date_display = cal_popup.attr('displaytimetext') + ' ' + cal_popup.attr('displayselectedtime');
                bwf_date_changed(date, date_display, productId, '.exp_summary_div .cal',  '.sellByDate', '.tippingPointDeadLine'  );
            }

            return false;
        }



        if(callFrom === 2){
            var url = "/cart/addSchedules";
            var data = $("#calendar-popUp .scheduling-form :input").serialize();
        }else if(callFrom === 3){           // after order is placed...
            var url = "/cart/addSchedules";  // change to proper action
            var data = $("#calendar-popUp .scheduling-form :input").serialize() + "&orderItemInfoId="+$('#calendar-popUp').attr("data-oii");
            saveDateToTextField(selectedDate);
            return false;
        }else{
            return false;
        }

        $.ajax({
            type: "POST",
            url: url,
            data: data ,
            success: function(data) {
                if (data.result === 1) {

                    saveDateToTextField(selectedDate);

                } else {
                    var msg = '\n';
                    jQuery.each(data.errors, function(field, message) {
                        jQuery.each(message, function() {
                            msg += '\n'+message;
                        });
                    });
                    //window.alert(data.msg + msg);
                    $("#product-scheduling-dialog").overlay().close();
                }
            },
            dataType: 'json'
        });
    } else {
        $("#product-scheduling-dialog").overlay().close();
    }
    return false;
});

// only needed in EXE mode
$("#calendar-popUp .js-no-propose").click(function(){
    var $destination = $(".p-form[data-pid="+ $("#calendar-popUp .scheduling-productId").val() +"]"
        + "[data-num=" + $("#calendar-popUp .scheduling-number").val() +"]"
        + "[data-oii=" + $('#calendar-popUp').attr("data-oii") +"]");

    $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker").attr("data-value", "");
    $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker .infobox_widget_decision_btn.decline").addClass('selected');
    infobox_populate_suggested_values($destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker"));
    infobox_update_exe_mode_decision_btn_status($destination.find('.infobox_mode_div.exe'));


    $("#product-scheduling-dialog").overlay().close();
    return false;
});

$(".overlay .close").click(function() {
    $(this).closest('.overlay').overlay().close();
});
})
;

function saveDateToTextField(selectedDate){

    var $destination = $(".p-form[data-pid="+ $("#calendar-popUp .scheduling-productId").val() +"]"
        + "[data-num=" + $("#calendar-popUp .scheduling-number").val() +"]"
        + "[data-oii=" + $('#calendar-popUp').attr("data-oii") +"]");
    //var $destination = $(".p-form[data-pid=5222]"
    //                    + "[data-num=1]"
    //                    + "[data-oii=659]");    // test code...


    if(selectedDate === 'reset_postbooking' || selectedDate === 'reset_prebooking'){
        selectedDate = (selectedDate === 'reset_postbooking') ? "Experience Date Postponed..." : "Decline Proposed Date and Let Customer Decide...";
        $("#calendar-popUp .schedule-box .scheduledDatetimeDisplay_0").val('_reset');
        $("#calendar-popUp").attr("displaytimetext", selectedDate);
        $("#calendar-popUp").attr("displayselectedtime", '');

    }

    var availOverride = '0';
    if($('#calendar-popUp').attr("data-avail-override") !== undefined){
        availOverride = $('#calendar-popUp').attr("data-avail-override");
    }
    if($destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker:visible").length >= 1){ // for exe mode     //length >= 1 in case when debugging on orderlistpage, it might be 2
        $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker").attr("data-value", $("#calendar-popUp .schedule-box .scheduledDatetimeDisplay_0").val());
        $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker").attr('data-avail-override', availOverride);
        $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker").attr("data-displaytimetext", $("#calendar-popUp").attr("displaytimetext"));
        $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker").attr("data-displayselectedtime", $("#calendar-popUp").attr("displayselectedtime"));
        $destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker .infobox_widget_decision_btn.decline").addClass('selected');
        infobox_populate_suggested_values($destination.find(".infobox_mode_div.exe .js-infobox-widget-decision-div.NegotiateSchedulePicker"));
        infobox_update_exe_mode_decision_btn_status($destination.find('.infobox_mode_div.exe'));
    }else{                                                                                      // for edit mode
        // populate the visible input with user friendly date time format
        $destination.find(".schedule-button input.js-display-date").val(selectedDate);
        $destination.find(".schedule-button input.js-display-date").removeClass("required");
        // populate hidden with system date time format
        $destination.find(".schedule-button input.js-date-1").val($("#calendar-popUp .schedule-box .scheduledDatetimeDisplay_0").val());
        $destination.find(".schedule-button input.js-date-1").attr("data-avail-override", availOverride);
        $destination.find(".schedule-button input.js-date-2").val($("#calendar-popUp .schedule-box .scheduledDatetimeDisplay_1").val());
        // trigger change event for the target input
        $destination.find(".schedule-button input.js-display-date").trigger("change");
    }


    $(".schedule-button .optional").hide();
    $("#product-scheduling-dialog").overlay().close();

    //
}

function isValidSchedule(index) {
    var box = null;
    var msg = '';
    if (index === 0) {
        box = $("#calendar-popUp .schedule-box-0");
        msg = 'for 1st date.';
    } else {
        box = $("#calendar-popUp .schedule-box-1");
        msg = 'for 2nd date.';
    }
    var d = new Date(box.find(".date input").val().substring(0, 9));
//    if ( box.find(".date input").val() !== '' && ! d.getDate()) {
//        alertEx('Please enter a valid date ' + msg);
//        return false;
//    }
    return true;
}

function getScheduledDateHTML() {
    var html = '';
    html += getTextDate(1, new Date($("#calendar-popUp .Schedule_date_0").val()));
    html += getTextDate(2, new Date($("#calendar-popUp .Schedule_date_1").val()));
    return html;
}
function getTextDate(seq, date
) {
    if (date.getDate()) {
        return '<li><span>'+ seq +'</span>'+ monthNames[date.getMonth()] + " " + date.getDate() + ', ' + date.getFullYear() + '</li>';
    } else {
        return '<li><span>'+ seq +'</span></li>';
    }
}

// update the deadlines for buy with friends when date is selected
function bwf_date_changed(date, dateDisplay, productId, summarySelector, sellByDateSelector, tippingPointDeadLineSelector ){
    // when duration chagned, update the summary
    var d_array = date.split(' ');
    var week_day_str = '';
    if (d_array.length>0 && $.trim(d_array[0]) !== '') {
        var d = $.datepicker.parseDate("yy-mm-dd",  d_array[0]);
        //var datestrInNewFormat = $.datepicker.formatDate( "mm/dd/yy", d);

        var weekday=new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        week_day_str = weekday[d.getDay()] + ', ';
        //alert(d.getDay())
    }


    $(summarySelector).html(week_day_str + dateDisplay);


    // when duration changed, the price text need to be changed
    var param = {
        productId: productId,
        date: date
    };


    jQuery.ajax({
        type: "POST",
        url: g_url_bwf_get_deadlines,
        dataType: 'json',
        data: param,
        success: function(data){
            if (data.result === 1) {
                if(sellByDateSelector !== ''){
                    $(sellByDateSelector).html(data.sellByDate).parent().show();
                }

                if(tippingPointDeadLineSelector !== ''){
                    $(tippingPointDeadLineSelector).html(data.tippingPointDeadLine).parent().show();
                }

            } else {
                if (data.error_code !== undefined && data.error_code === g_err_not_logged_in ) {
                    alertEx('log in first');
                }
                else{
                    alertEx('' +getErrorMessage(data));
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert_error("error in getting price text <br />status:" + textStatus + " <br />error:" + errorThrown + " <br /><br />" +XMLHttpRequest.responseText);

        }
    });

}

function availability_override_link_clicked(obj){
    var $obj = $(obj);

    if($obj.hasClass('js-req')){
        $obj.parents('.availability_override_div').find('.availability_override_div_req').hide();
        $obj.parents('.availability_override_div').find('.availability_override_div_cancel').show();
        $('#calendar-popUp').attr("data-avail-override",1);

    }
    else{
        $obj.parents('.availability_override_div').find('.availability_override_div_cancel').hide();
        $obj.parents('.availability_override_div').find('.availability_override_div_req').show();
        $('#calendar-popUp').attr("data-avail-override",0);
    }
    draw_calendar_general($('#calendar-popUp'));

}
                $(document).ready(function(){

                // layout css preparing
                $(".level-menu .drop-down").each(function () {
                    var numOfcol = $(this).find(".level-2 .col").length;
                    $(this).find(".level-2 .col").css("max-width", 1 / numOfcol * 100 + "%");
                });

                $(".level-menu .l-menu").mouseover(function(){
                var thisLeft = $(this).position().left;
                $(this).siblings(".l-menu").children(".highlight-bar").hide();
                $(this).siblings(".l-menu").children(".drop-down").hide();
                $(this).children(".highlight-bar").show();
                // set the proper left
                //$(this).children(".drop-down").css("left", thisLeft+"px");
                // give enough width firstly
                $(this).children(".drop-down").css('min-width', 900);
                $(this).children(".drop-down").show();
                // adjust to the proper width
                var colLength = $(this).children(".drop-down").find(".level-3 .col").length;
                if(colLength == 1){
                var itemsCnt = $(this).children(".drop-down").find(".level-3 .topNavCat").length;
                if(itemsCnt > 9){
                $(this).children(".drop-down").find(".level-3 .col").css('min-width',320);
                $(this).children(".drop-down").css('min-width',320);
            }else{
                $(this).children(".drop-down").css('min-width', colLength * 160);
            }
            }else{
                $(this).children(".drop-down").css('min-width', colLength * 160);
            }
                //$(this).children(".drop-down").css("max-width","calc(100% - "+(thisLeft+5)+"px)");
            });

                $(".level-menu .l-menu").on("mouseleave", ".drop-down", function(){
                $(this).fadeOut(200);
                $(this).siblings(".highlight-bar").fadeOut(200);
                //$(this).children(".drop-down").css("max-width","calc(100% - "+(thisLeft+5)+"px)");
            });


                $(".level-menu .l-menu").on("keydown", function(e){

                //if it is inside a pop menu
                if($(e.target).parents('.drop-down').length>0){
                // esc pressed
                if(e.which==g_keycodes.esc){
                $(this).children(".drop-down") .trigger('mouseleave');
                $(this).children('a').focus();
            }
                else{
                // do nothing
            }

            }
                // the top lvl link
                else{
                //has sub menu
                if($(this).find('.drop-down a').length>0){
                // space(32) or enter(13)
                if(e.which==g_keycodes.space || e.which==g_keycodes.enter){
                if($(this).children(".drop-down").is(':visible')){
                $(this).children(".drop-down").trigger('mouseleave');
            }
                else{
                $(this).trigger('mouseover');
            }

                e.preventDefault();

            }
                //esc pressed
                else if (e.which==g_keycodes.esc){
                $(this).children(".drop-down").trigger('mouseleave');
            }

            }


            }


            });

            });

                    <script type="text/javascript">
                        var shippingRequired = 1;
                        var itemCountForDomesticShippingRate = 0;
                        var itemCountForInternationalShippingRate = 1;
                        var fixedDomesticShippingCost = 65.00;
                        var fixedInternationalShippingCost = 0.00;

                        var shopping_cart_height = 0;
                        var u_travelCost = -1;
                        var distance = -2;
                        var errorMessage = "";

                        function cartStr(index, replace
                    ) {
                        var strings = {
                        'Shipping'                           : "Shipping",
                        'details_needed'                     : "Details Needed",
                        'enter_correct_email'                : "Please enter correct email.",
                        'select_date_after_change_duration'  : "Please re-select a date and time after you change the duration of the event.",
                        'suggest_enter_date_and_location'    : "We suggest you submit <span>both Date\/Time<\/span> and <span>Location<\/span>. Your experience will not be officially booked until both Date\/Time and Location are agreed upon. <br><br>Are you sure you would like to proceed?",
                        'select_date_after_from_now'         : "Please select a date after %numberOfDays% days from now.",
                        'title_tbd'                          : "TBD",
                        'title_included'                     : "Included",
                        'shipping_estimate_head'             : "To: %countryShortCode%, %shippingZip%",
                        'person'                             : "person",
                        'people'                             : "people",
                        'hour'                               : "hour",
                        'hours'                              : "hours",
                        'enter_valid_amount'                 : "Please enter a valid amount.",
                        'enter_select_amount'                : "Please enter or select an amount",
                    };

                        if (typeof strings[index] === 'undefined') {
                        return index;
                    } else {
                        var str = strings[index];
                        if (typeof replace === 'object') {
                        for (var key in replace) {
                        str = str.replace(key, replace[key]);
                    }
                    }
                        return str;
                    }
                    }
                        /!**************************************** Layout Preparing ********************!/
/!*
infoBoxLayOutPreparing();

// set .
p - block - 2 the same height of .
    p - block - 1
// using display: table; display:table - cell to verticle center the .
price - info
if (!g_is_mobile){
    $(".p-block .p-block-2").each(function () {
        if ($(this).height() > $(this).siblings(".p-block-1").height()) {
            $(this).siblings(".p-block-1").css('min-height', $(this).height());
        } else {
            $(this).css('min-height', $(this).siblings(".p-block-1").height());
        }
    });
}

$(".p-form .
info - box
").each(function(){

})
;

$(window).load(function (){
    var pos = !isHandheld();

    $("#overBooked-notification").appendTo('body');
    $("#overBooked-notification").overlay({
        top: 60, left: getPopupLeftToCenter("overBooked-notification"), fixed: pos, closeOnClick: true,
        mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5}
    });
})
;

ioReady(function (){

    if ( ! g_is_mobile) {
        var top_margin = $("#product-table").offset().top - 95;
        var top_offset = 45;

        var c_bottom = $("#left-block").offset().top + $("#left-block").height();

        $(document).scroll(function(){
            var scrollTop = $(document).scrollTop();
            //console.log('top_margin:' + top_margin + ' | ' + 'c_bottom:' + c_bottom + ' | ' + 'scrollTop:' + scrollTop);

            var rtl = $("#right-block").hasClass('rtl');
            var $rightBlock = $("#right-block");

            if(rtl){
                $rightBlock.css('left', 0 );
            }
            else{
                $rightBlock.css('right', 0);
            }

            if (scrollTop > top_margin){
                if(scrollTop + $("#right-block").height() + 150 > c_bottom){
                    var c_top = $("#shopping-cart .box").height() - $("#right-block").height() - 155;
                    $rightBlock.css({position: "relative", top:c_top});
                } else {
                    $rightBlock.css({position: "absolute", top: (scrollTop - top_offset) + "px"});
                }
            } else {
                $rightBlock.css({position: "relative", top: 0});
            }

        });
    }

    // Special Code for MasterCard temp user - see dialog in _cart_content.php
    // url of the product in the cart is '#' to prevent user to go to PDP

    // var left = g_is_mobile ? 10 : getPopupLeftToCenter("pdDetailsOverlay");
    var prev_pid  = "";
    var pid  = "";
    $("#pdDetailsOverlay").appendTo("body");
    $("#pdDetailsOverlay").overlay({
        top: 100, left: 'center', fixed: true, closeOnClick: true,load: false,
        mask: {color: '#000000', loadSpeed: 200, opacity: 0.5},
        onLoad: function(){
            ga('send', 'pageview', 'Age Verification');
            $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
        },
        onBeforeLoad: function(){
            if (pid !== prev_pid) {
                prev_pid = pid;
                $.post( '/product/getProductDescription', {pid : pid},
                    function(data){
                        if(data.result === 0){
                            alertEx("Error Occured Please Try Again");
                        } else {
                            $("#pdDetailsOverlay .product-desc").html(data.details);
                            // $("#pdDetailsOverlay .fineprint").html(data.finePrint);
                        }
                    }, 'json');
            }
        }
    });

    $(".js-pdpDetails").click(function(){
        if($(this).attr('href') === "#"){
            pid = $(this).attr('pid');
            $("#pdDetailsOverlay").overlay().load();
            return false;
        } else {
            return true;
        }
    });

    $("#customer-support").click(function(){
        showConciergeEmailPopup();
        return false;
    });

    //==========================================================================

    $("#shipping-estimation .help_popUp").click(function(){
        if (g_is_mobile) {
            $("#shipping_estimate_help_dialog").css({right: '10px', top: '100px'});
        } else {
            $("#shipping_estimate_help_dialog").css({left: '-300px', top: '-40px'});
        }
        $("#shipping_estimate_help_dialog").toggle();
        return false;
    });
    $("#shipping_estimate_help_dialog .close").click(function(){
        $("#shipping_estimate_help_dialog").hide();
    });

    $("#shipTo").click(function(){
        $(".estimation-block").show();
    });

    //==========================================================================

    if ( ! g_is_mobile) {
        $("#product-table .tip .convert-tip, #product-table .tip .remove-tip").mouseleave(function(){
            $(this).hide();
            return false;
        });
        $("#product-table .convert a").mouseenter(function(){
            $(this).parent().parent().find(".convert-tip").show();
            return false;
        });
        $("#product-table .convert a").mouseleave(function(e){
            if (e.relatedTarget) {
                if ($(e.relatedTarget).hasClass('convert-tip') ||
                    $(e.relatedTarget).parent().hasClass('convert-tip')) {
                    return false;
                }
            }
            $(this).parent().parent().find(".convert-tip").hide();
            return false;
        });
        $("#product-table .remove a").mouseenter(function(){
            $(this).parent().parent().find(".remove-tip").show();
            return false;
        });
        $("#product-table .remove a").mouseleave(function(e){
            if (e.relatedTarget) {
                if ($(e.relatedTarget).hasClass('remove-tip') ||
                    $(e.relatedTarget).parent().hasClass('remove-tip')) {
                    return false;
                }
            }
            $(this).parent().parent().find(".remove-tip").hide();
            return false;
        });
    }


//    $("#product-table .addAddress").click(function(){
//        ga('send', 'event', 'Cart', 'Add Address');
//        $("#location-productName").html($(this).attr("pname"));
//        $("#location-productId").val($(this).attr("pid"));
//        $("#location-number").val($(this).attr("number"));
//        $("#cart-calendar .location-celebId").val($(this).attr("cid"));
//
//        return false;
//    });

    //=========================================  Duration Change  ==============
    $(".js-durationMinutes").change(function(){
        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');
        //$(this).closest('.info').find('.schedule-container .schedule').attr('duration',parseInt($(this).val()));
        var dm      = (parseInt($(this).val()) * 60);
        var pId     = $(this).closest('.p-form').attr("data-pid");
        var number  = $(this).closest('.p-form').attr("data-num");
        $.post( '/cart/updateSocialInfo', {
                productId        : pId,
                number           : number,
                durationMinutes  : dm,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);

                    $main.siblings(".p-block").find(".js-p-form").attr("data-dm",dm);
                    if ($main.siblings(".p-block").find(".js-p-form .schedule-button.preCheckOutField input").val() !== "" ){

                        // clear the userSchedules for this product
                        $.post( '/cart/deleteSchedules', "productId=" + pId + "&number=" + number,
                            function(data){
                            },
                            'json'
                        );
                        alertEx(cartStr('select_date_after_change_duration'));
                        $main.siblings(".p-block").find(".js-p-form .schedule-button.preCheckOutField input").val("");
                        draw_calendar_general($('#calendar-popUp'));
                        $('#calendar-popUp .cal-time .time').html("");
                        $('#calendar-popUp .schedule-wrapper input').val("");
                        $("#calendar-popUp .cal-day-box.day.selected").removeClass("selected");
                    }

                } else {
                    alertEx(data.msg);
                }
            },
            'json'
        );
    });

    //======================================  Number of Guest Change  ==========
    $(".js-numGuests").change(function(){
        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');
        var $this = $(this);

        // for buy with friends,  for a guest,  change the guest number attr when number of guests changed. VP-9655
        var $form = $this.closest('.js-p-form');
        if ($form.attr('data-isgroupbuytype') === '1' && $form.attr('data-master-oii') !== '0') {
            var people_val = $this.val()*1;
            var people_string =  people_val>1?getJsText('people'):getJsText('person');
            $this.closest('.info-box').children('.attr-row').find('.attr-guests .attr-val').text($this.val() + ' ' + people_string) ;
        }

        $.post( '/cart/updateSocialInfo', {
                productId        : $(this).closest('.p-form').attr("data-pid"),
                number           : $(this).closest('.p-form').attr("data-num"),
                numGuests        : $(this).val(),
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);
                } else {
                    alertEx(data.msg);
                }
            },
            'json'
        );
        return false;
    });
    //======================================  Quantity Change  =================
    $(".js-quantity-change").change(function(){
        ga('send', 'event', 'Checkout', 'QuantityUpdate');
        var $obj = $(this);
        var pid     = $obj.closest('.p-form').attr("data-pid");
        var num     = $obj.closest('.p-form').attr("data-num");
        var new_qty = $obj.val();
        $obj.closest('.body-row').find(".js-quantity").text(new_qty);
        $.post( '/cart/update', {
                productId        : pid,
                number           : num,
                quantity         : new_qty,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    $obj.closest('.body-row').find('.shipping-msg').html('<p>'+data.shippingMsg+'</p>');
                    var price      = $obj.closest('.body-row').attr("data-price"); // calculate locally
                    var new_amount = price * new_qty;
                    var localeId   = data.products[0].localeId;

                    $obj.closest('.body-row').find(".js-amount").html(g_locale.formatCurrency(new_amount, undefined, localeId, true));

                    // need to update hyatt points for price change if world of hyatt member
                    if($('.hyatt-points-sec').length > 0) {
                        var pBlock2 = $obj.closest('.p-block-1').siblings('.p-block-2');
                        pBlock2.find('.js-total-sum').html(new_amount.formatMoney().replace(/\.0+$/,''));
                        var points = g_locale.formatNumber(calculateHyattPointsConversion(new_amount), false, false, false);
                        pBlock2.find('.hyattTotalPoints').html(points);
                    }
                    displayEstimationData(data);
                    if(!g_is_mobile){
                        getCartPopupHtml(false, false);
                    }
                    ga('send', 'pageview', 'Shopping Bag');
                } else {
                    alertEx(data.msg);
                }
            }, 'json');
        return false;
    });

    //======================================  addon Change  ================
    $(".customCheckBox span").click(function(){
        var parent_productId = $(this).closest(".js-p-form").attr("data-pid");
        var parent_number    = $(this).closest(".js-p-form").attr("data-num");
        var pid              = $(this).closest(".customCheckBox").attr("pid");
        var num              = $(this).closest(".customCheckBox").attr("data-number");

        if($(this).closest(".customCheckBox").hasClass("checked")){
            var action = "remove";
            $(this).closest(".customCheckBox").removeClass("checked");
        }else{
            var action = "add";
            $(this).closest(".customCheckBox").addClass("checked");
        }

        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');

        $.post( '/cart/UpdateSubproducts', {
                productId        : pid,
                number           : num,
                parent_productId : parent_productId,
                parent_number    : parent_number,
                action           : action,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);
                } else {
                    alertEx(data.msg);
                }
            }, 'json');
        return false;
    });

    //======================================  Gift Certificate  ================
    $(".preCheckOutField .gift-cert-value").change(function(){

        var value   = "";

        if ($(this).val() === "own") {
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").show();
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").find("input").focus();
            //$("#CartItemSocialInfo_value").val($(this).closest(".preCheckOutField").next(".preCheckOutField.own input").val());
        } else {
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").hide();
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").find("input").val($(this).val());
            giftCertificatValueUpdate($(this), $(this).val());
            //$("#CartItemSocialInfo_value").val($(this).val());
        }
        return false;
    });
    $(".preCheckOutField .gift-cert-custom").focusout(function(){
        isValidAmount($(this));
    });


    //================================  For all input and textarea  ============
    $(".preCheckOutField input.js-general, .preCheckOutField textarea.js-general").focusout(function(){
        $(this).val($(this).val().trim());
        if ($(this).val() !== ""){
            if ($(this).hasClass("js-email")) {
                $(this).siblings(".errorMessage").remove();
                if (! validateEmail($(this).val())){
                    $("<p class='errorMessage'>"+cartStr('enter_correct_email')+"</p>").insertAfter($(this));
                    $(this).addClass("js-error");
                    return false;
                }else{
                    $(this).removeClass("js-error");
                }
            }

            var obj = {productId : $(this).closest('.p-form').attr("data-pid"),
                number    : $(this).closest('.p-form').attr("data-num"),
                type      : "no-estimation"};
            obj[$(this).attr("data-db-name")] = $(this).val();

            $.post( '/cart/updateSocialInfo', obj,
                function(data){
                    if (data.result === 1) {
                        // this doesn't change price
                    } else {
                        alertEx(data.msg);
                    }
                },
                'json'
            );
        }
    });

    //=============================  Only for PT 17 Entring address in cart  ===

    $(".start-checkout").click(function(){

        if (g_needCompleteSignup) {
            $("#redirectURL").val('');
            displayOverlay('complete-signup-dialog');
            return false;
        }


        //event.preventDefault();
        if(!actionBtnClickHandling($(this))){
            return false;
        }

        $obj = $(this);
        $("#product-table .preCheckOutField .js-required.required").removeClass("required");
        var complete = true;
        var scrollTo = "";
        var prevPid = "";
        var errCount = 0;
        var errClass = "";
        var $prevObj;
        var $currentObj;

        if($("#product-table .preCheckOutField .js-error:visible").length > 0){
            scrollTo = $("#product-table .preCheckOutField .js-error:visible").first().offset().top - 30 - 55 - 40;
            $('html, body').animate({scrollTop:scrollTo}, 400,function(){
                //alertEx("Please finish the required filed(s).");
            });

            actionBtnClickHandling($(this), "remove");
            return false;
        }


        $("#product-table .preCheckOutField .js-required:visible").each(function(){
            $currentObj = $(this);

            if ($(this).val() === "") {

                complete = false; errCount++;
                $(this).addClass("required");
                $(this).closest('.widget-row').find('.errorMessage').remove();

                if($prevObj !== undefined &&
                    $(this).closest('.nextProd').attr('data-pid') !== $prevObj.closest('.nextProd').attr('data-pid'))
                {
                    //Time to append errormessage
                    if(errorMessage !== "")  $prevObj.append("<p class='errorMessage'>"+errorMessage+"</p>");

                    //Clear Error Message
                    errorMessage = "";
                    if(g_is_mobile){
                        $prevObj.closest('.p-block').find('.price-info').css('border-top', '1px solid #e1e1e1');
                    }

                    errCount = 0;

                }
                //If more than one error message in a block remove bottom border for the blocks
                /!* if(errCount >= 1 && $prevObj !== undefined && !$prevObj.hasClass('js-gift-certificate')
                     && !$prevObj.children('.preCheckOutField.js-required:visible').is(':last-child')){
                     //$prevObj.find('input').css('border-bottom','none');
                 }*!/

/!*
if ($(this).attr('data-error') !== undefined && $(this).hasClass("required")) {
    errorMessage += $(this).attr('data-error') + "<br />";
}

if (scrollTo === "") {
    scrollTo = $(this).offset().top - 30 - 55 - 40;
}
} else
{
    // If $prevObj is set but the current input field does not have
    // value and errormessage has value then append to prev obj if pids are not equal
    if ($prevObj !== undefined &&
        $(this).closest('.nextProd').attr('data-pid') !== $prevObj.closest('.nextProd').attr('data-pid')) {
        //Time to append errormessage
        if (errorMessage !== "") $prevObj.append("<p class='errorMessage'>" + errorMessage + "</p>");

        //Clear Error Message
        errorMessage = "";
        if (g_is_mobile) {
            $prevObj.closest('.p-block').find('.price-info').css('border-top', '1px solid #e1e1e1');
        }

        errCount = 0;
    }
}

$prevObj = $(this).closest('.widget-row');
if ($prevObj.children('.preCheckOutField:visible').length > 1) {
    if (errorMessage !== "" && $prevObj.length > 0
        && !$prevObj.hasClass('js-gift-certificate')
        && $prevObj.find('input').hasClass('js-required')) {
        $currentObj.css('border-bottom', '1px solid #FD6340');
    }
}

//Append error message to last block
if (errorMessage !== "") {
    //VP-11833 Needed to add border top for personalized messages.
    //Error appeared to be in the textbox
    $prevObj.append("<p class='errorMessage sg-c-error sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right'>" + errorMessage + "</p>");
    //If more than one error message in a block remove top border for the blocks
    errCount = 0;
    errorMessage = "";
}
})
;

if (!complete) {
    $('html, body').animate({scrollTop: scrollTo}, 400, function () {
        //alertEx("Please finish the required filed(s).");
    });

    actionBtnClickHandling($(this), "remove");
    return false;
}

//Do Ajax post to check if the duration is available
$.get('/cart/checkDurationAvailable',
    function (data) {
        if (data.result === 1) {
            // Do Nothing
            complete = true;
        } else if (data.loggedIn !== undefined && data.loggedIn === 0) {
            // logged out or tempuser session expired
            // illegal action - redirect to homepage
            window.location.href = g_is_mobile ? "/m" : "/"; // For tempuser session expired, it will display Session Expired page
        } else {
            complete = false;

            /!*
            $('#conversationOverlay-dialog .celebrity-img').attr('src', data.celebImg);
            $('#conversationOverlay-dialog .celebrity-name').html(data.celebName);
            $('#conversationOverlay-dialog .subject-txt').val(data.productName);
            *!/
/!*
            var contact_link = $('#overBooked-notification .vendor-contact-us');
            contact_link.attr('pid', data.productId);
            contact_link.attr('service_vendorid', data.service_vendorId);
            contact_link.attr('data-imgsrc', data.vendorImg);
            contact_link.attr('data-id', data.service_vendorId);
            contact_link.attr('data-name', data.vendorName);


            $('.overBooked-vendorName').html(data.celebName);
            $('.overBooked-timeRange').html(Math.abs(data.difference));
            $('.overBooked-windowSize').html(data.windowSize);
            $("#overBooked-notification").overlay().load();

            actionBtnClickHandling($obj, "remove");
            return false;
        }

        if (complete) {
            // encourage customer to fill out all info for redemption items

            var redir = true;
            $("#product-table .preCheckOutField .js-recommended:visible").each(function () {
                if ($(this).val() === "") {
                    redir = false;
                    confirmEx(cartStr('suggest_enter_date_and_location'),
                        cartStr('details_needed'),
                        function () {
                            window.location = (g_is_mobile ? "/m" : "") + "/cart/checkout";
                        },
                        function () {
                            $(".start-checkout").removeClass('disabled');
                        },
                        'yes',
                        'no');
                    return false;
                }
            });

            if (redir === true) {
                window.location.href = (g_is_mobile ? "/m" : "") + "/cart/checkout";
            }

        }
    },
    'json'
);

})
;

$(".vendor-contact-us").click(function () {
    $("#overBooked-notification").overlay().close();

    questionPopUp($(this));

    /!*
    $('#conversationOverlay-dialog .celebrity-img').attr('src', $('.conversation-celebImg').val());
    $('#conversationOverlay-dialog .celebrity-name').html( $('.conversation-celebName').val());
    $('#conversationOverlay-dialog .subject-txt').val( 'About ' + $('#conversationOverlay-dialog .subject-txt').val());
    $("#conversationOverlay-dialog").overlay().load();
    *!/
/!*
    return false;
});

$('.datetimepicker').each(function () {
    var showTim = (($(this).attr("date-pt") === '18') ? false : true);
    $(this).datetimepicker({
        minDate: (parseInt($(this).attr("date-mindate")) + 1),
        showTimepicker: showTim,
        onClose: function (dateText) {
            dateText = dateText.trim();
            if (dateText === '') {
                return true;
            }
            var timeToPostDaysInAdvance = parseInt($(this).attr("date-mindate"));
            var timestamp = new Date().getTime() + (timeToPostDaysInAdvance * 24 * 60 * 60 * 1000);
            var selected = new Date(dateText);
            if (timestamp > selected) {
                alertEx(cartStr('select_date_after_from_now', {'%numberOfDays%': timeToPostDaysInAdvance}));
                $(this).val('');
            } else {
                $.post('/cart/updateSocialInfo',
                    "&productId=" + $(this).closest('.p-form').attr("data-pid") +
                    "&number=" + $(this).closest('.p-form').attr("data-num") + "&timeToPost=" + dateText + ":00",
                    function (data) {
                        if (data.result === 1) {

                        } else {
                            alertEx(data.msg);
                        }
                    },
                    'json'
                );
            }
        }
    });
});


//========================================  Before Checkout  ===============
// Check if Forms need to be Submitted

$("#product-table").children('.locationAddress-container').each(function () {
    if ($(this).find('.location-address').val() !== "") {
        $(this).find('.location-address-save').trigger('click');
    }
});
//==========================================================================
$("#estimate-button").click(function () {
    if ($(this).hasClass('inactive')) return false;
    if ($("#zipcode").val() === '') {
        alertEx("Please enter a zip code.");
        return false;
    }
    if ($("#shippingCountryShortCode").val() === 'US' && $("#zipcode").val().length !== 5) {
        alertEx("Please enter a 5-digit zip code.");
        return false;
    }

    ga('send', 'event', 'Checkout', 'Estimate');
    var current = $(this);
    current.addClass('inactive');
    $('html, body').animate({scrollTop: 0}, 500);
    $("#shipping-estimation .estimation-block").hide();
    $("#shipping-estimation h2 span").removeClass('expanded');
    $("#shipping-estimation .estimation-result-block").show();
    $("#shipping").html('');
    $("#shipTo").html('');
    $("#tax").html('');
    $("#grandTotal").html('');                        //$('.productTotal_summary').html()
    $.post('/cart/estimate',
        {
            type: "shipping",
            zipcode: $("#zipcode").val(),
            countryShortCode: $("#shippingCountryShortCode").val()
        },
        function (data) {
            if (data.result === 1) {
                displayEstimationData(data);
            } else {
                alertEx(data.msg);
            }
            $("#shipping-estimation .estimation-expand").removeClass('expanded');
            current.removeClass('inactive');
        }, 'json');
    return false;
});

$(".top-warning .js-goto-wishlist").click(function () {
    if ($(this).hasClass("mobile")) {
        location.href = "/m/wishlist";
    } else {
        $('html, body').animate({
            scrollTop: $("#cart-wishlist").offset().top - 100
        }, 1500);
    }

    return false;
});

$(".top-warning img").click(function () {
    $(this).parent().fadeOut('slow');
});

$("#shipping-estimation h2, #shipping-estimation .estimation-expand").click(function () {
    if ($("#shipping-estimation .estimation-expand").hasClass('expanded')) {
        $("#shipping-estimation .estimation-block").slideUp();
        $("#shipping-estimation .estimation-expand").removeClass('expanded');
    } else {
        $("#shipping-estimation .estimation-block").slideDown();
        $("#shipping-estimation .estimation-expand").addClass('expanded');
    }
    return false;
});


})
;

function displayEstimationData(data) {
    var productTotal = 0;

    if (data.productTotal) {
        productTotal = parseFloat(data.productTotal);
    }

    var localeId = g_user_locale.localeId;
    if ($.isArray(data.products) && data.products.length > 0) {
        localeId = data.products[0].localeId;
    }
    else if (data.thisProduct !== undefined) {
        localeId = data.thisProduct.localeId;
    }
    else {
    }

    var pointStr = "%points% Point";
    var pointsStr = "%points% Points";

    if ('Hyatt_redemptionOnly' in data && data['Hyatt_redemptionOnly'] && 0) {
        var productTotalPoints = g_locale.formatNumber(calculateHyattPointsConversion(productTotal), false, false, false);
        var htmlPoints = '';

        if (productTotalPoints != 1) {
            htmlPoints = pointsStr.replace('%points%', productTotalPoints);
        } else {
            htmlPoints = pointStr.replace('%points%', productTotalPoints);
        }

        $('#estimate-subtotal').html(htmlPoints);
        $('.productTotal_summary').html(htmlPoints);
    } else if ('hyattPointsPrice' in data && 'hyattPointsTotal' in data && 0) {
        price = data.hyattPointsPrice;
        total = data.hyattPointsTotal;
        $('.productTotal_summary').html(data.hyattPointsTotal);
    } else {
        $('#estimate-subtotal').html(g_locale.formatCurrency(productTotal, undefined, localeId, true));  //productTotal.formatMoney()
        $('.productTotal_summary').html(g_locale.formatCurrency(productTotal, undefined, localeId, true));   //productTotal.formatMoney()
    }

    if (data.shipping === 0) {
        if (data.chargedPostCheckout === '1') {
            $("#shipping").html(cartStr("title_tbd"));
            $(".help_dialog.shipping-tip").slideToggle('slow');
        } else if (data.shippingRequired === '0') {
            $(".shipping-amount").html(g_locale.getCurrencySymbol(localeId) + '0.00');
        } else {
            $("#shipping").html(cartStr("title_included"));
        }
        if (data.shippingInfo !== null && data.shippingInfo.result === 0) {
            alertEx(data.shippingInfo.msg, cartStr('Shipping'));
        }
    } else {
        if (data.shipping !== undefined) {
            $("#shipping").html(g_locale.formatCurrency(data.shipping, undefined, localeId, true));   //data.shipping.formatMoney()
        }
        if (data.chargedPostCheckout) {
            $(".help_dialog.shipping-tip").slideToggle('slow');
        }
    }
    $("#shipTo").html(cartStr('shipping_estimate_head', {
        '%countryShortCode%': $("#shippingCountryShortCode option:selected").html(),
        '%shippingZip%': data.shippingZip
    }));

    if ((data.tax - data.taxIncluded) >= 0.01) {
        $("#tax").html(g_locale.formatCurrency(data.tax - data.taxIncluded, undefined, localeId, true));    //data.tax.formatMoney()
    }
    else {
        $("#tax").closest("div").hide();
    }

    if (typeof data.totalTravelCost !== 'undefined') {
        var travelTotal = parseFloat(data.totalTravelCost);
        $('.travelTotal_summary').html(g_locale.formatCurrency(travelTotal, undefined, localeId, true));      //travelTotal.formatMoney()
        if (travelTotal > 0) {
            $(".js-total-travel-cost").show();
        } else {
            $(".js-total-travel-cost").hide();
        }
    }

    var total = 1 * productTotal + 1 * data.shipping + 1 * data.tax;

    if ('Hyatt_redemptionOnly' in data && data['Hyatt_redemptionOnly'] && 0) {
        var productTotalPoints = g_locale.formatNumber(calculateHyattPointsConversion(total), false, false, false);
        var htmlPoints = '';

        if (productTotalPoints != 1) {
            htmlPoints = pointsStr.replace('%points%', productTotalPoints);
        } else {
            htmlPoints = pointStr.replace('%points%', productTotalPoints);
        }

        $("#grandTotal").html(htmlPoints);
        $(".grandTotal_summary").html(htmlPoints);

        $('#shipping').parent('p').parent('div').hide();
        $('#shipTo').parent('p').parent('div').hide();
    } else {
        $("#grandTotal").html(g_locale.formatCurrency(total, undefined, localeId, true)); // do not display grandTotal (grand total is applied promo and gc)  //total.formatMoney()
        $(".grandTotal_summary").html(g_locale.formatCurrency(total, undefined, localeId, true)); // copy #grandTotal display for total display in redemtpion cart
    }

    // update mini cart
    if (!g_is_mobile) {
        getCartPopupHtml(false, false);
    }

}

function updateCostInfo(data, $main, $priceInfo
) {
    var localeId = data.thisProduct.localeId;

    var addOnPrice = 0;
    if (data.thisProduct.addOnPrice !== undefined) {
        addOnPrice = parseFloat(data.thisProduct.addOnPrice);
    } else if (data.products !== undefined) {
        for (var i = 0; data.products.length > i; i++) {
            if (data.products[i].isMaster === '1') {
                continue;
            } else if (data.products[i].parent_productId === data.thisProduct.productId) {
                addOnPrice += parseFloat(data.products[i].price);
            }
        }
    }

    var price = '';
    var total = '';

    if (data.thisProduct.Hyatt_redemptionOnly && 'hyattPointsPrice' in data && 'hyattPointsTotal' in data && 0) {
        data.thisProduct.isPickOneProduct = false;
        price = data.hyattPointsPrice;
        total = data.hyattPointsTotal;
    } else {
        price = g_locale.formatCurrency(ioRound(data.thisProduct.price, 2), undefined, localeId, false);  //ioRound(data.thisProduct.price).formatMoney(0);
        total = g_locale.formatCurrency(ioRound(parseFloat(data.thisProduct.price, 2) + addOnPrice), undefined, localeId, false);
    }

    if (data.thisProduct.isPickOneProduct) {
        var strPrice = 'Use Redemption Code';
        var pPrice = ioRound(data.thisProduct.price, 2);
        var maxBenefit = ioRound(data.thisProduct.maxBenefit, 2);
        if (maxBenefit > 0 && pPrice > maxBenefit) {
            var str = '%s with Redemption Code';
            var payPrice = g_locale.formatCurrency(pPrice - maxBenefit, undefined, localeId, false); //(pPrice - maxBenefit).formatMoney(0);
            strPrice = str.replace('%s', payPrice);
        }
        $main.find('.js-price').html(strPrice);
        $main.find('.js-amount').html(strPrice);
        return;
    } else {
        $main.find('.js-price').html(price);
        $main.find('.js-amount').html(total);
    }

    var unitPrice = data.thisProduct.price;
    data.thisProduct.price = parseFloat(data.thisProduct.price);
    data.thisProduct.numGuests = parseInt(data.thisProduct.numGuests);
    data.thisProduct.durationHours = parseInt(data.thisProduct.durationHours);
    data.thisProduct.travelCost = parseFloat(data.thisProduct.travelCost);

    console.log(unitPrice);
    var calStr = "";

    if ($priceInfo.attr("data-gv") > 0 && $priceInfo.attr("data-dv") > 0) {
        unitPrice = unitPrice / (data.thisProduct.numGuests * data.thisProduct.durationHours);
        calStr = g_locale.formatCurrency(unitPrice, undefined, localeId, false) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.numGuests + " " + (data.thisProduct.numGuests > 1 ? cartStr("people") : cartStr("person")) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.durationHours + " " + (data.thisProduct.durationHours > 1 ? cartStr("hours") : cartStr("hour"));
    } else if ($priceInfo.attr("data-gv") > 0) {
        console.log(data.thisProduct.numGuests);
        unitPrice = unitPrice / data.thisProduct.numGuests;
        calStr = g_locale.formatCurrency(unitPrice, undefined, localeId, false) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.numGuests + " " + (data.thisProduct.numGuests > 1 ? cartStr("people") : cartStr("person"));
    } else if ($priceInfo.attr("data-dv") > 0) {
        unitPrice = unitPrice / data.thisProduct.durationHours;
        calStr = g_locale.formatCurrency(unitPrice, undefined, localeId, false) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.durationHours + " " + (data.thisProduct.durationHours > 1 ? cartStr("hours") : cartStr("hour"));
    }
    console.log(unitPrice);

    if (calStr !== "") {
        $priceInfo.find(".js-price-detail").html(calStr);
        $priceInfo.find(".js-price-total").text(price);

        //if we have addOn
        if (addOnPrice > 0) {
            $priceInfo.find(".js-price-addon-price").text(g_locale.formatCurrency(ioRound(addOnPrice), undefined, localeId, false));
            $priceInfo.find(".js-addon-cost").show();
        } else {
            $priceInfo.find(".js-addon-cost").hide();
        }

        if (data.thisProduct.travelCost > 0) {
            $priceInfo.find(".js-travel-cost").show();
            $priceInfo.find(".js-travel-cost-amt").text(g_locale.formatCurrency(data.thisProduct.travelCost, undefined, localeId, false));
            $priceInfo.find(".js-total-sum").text(g_locale.formatCurrency((parseFloat(data.thisProduct.price) + addOnPrice + data.thisProduct.travelCost), undefined, localeId, false));

            // need to update hyatt points for price change if world of hyatt member
            if ($('.hyatt-points-sec').length > 0) {
                var points = g_locale.formatNumber(calculateHyattPointsConversion(parseFloat(data.thisProduct.price) + addOnPrice + data.thisProduct.travelCost), false, false, false);
                $priceInfo.find('.hyattTotalPoints').html(points);
            }
        } else {
            $priceInfo.find(".js-total-sum").text(g_locale.formatCurrency(parseFloat(data.thisProduct.price) + addOnPrice, undefined, localeId, false));
            $priceInfo.find(".js-travel-cost").hide();

            // need to update hyatt points for price change if world of hyatt member
            if ($('.hyatt-points-sec').length > 0) {
                var points = g_locale.formatNumber(calculateHyattPointsConversion(parseFloat(data.thisProduct.price) + addOnPrice), false, false, false);
                $priceInfo.find('.hyattTotalPoints').html(points);
            }
        }
    } else {
        //alertEx("Unknow Error. Please contact Ifonly Admin");
    }
}

function addCommasForCart(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    x2 = x2.substring(0, 3);
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
    //return x1;
}

function giftCertificatValueUpdate($obj, gcValue
) {

    var $main = $obj.closest('.body-row').find('.main');
    $.post('/cart/updateSocialInfo', {
            productId: $obj.closest('.p-form').attr("data-pid"),
            number: $obj.closest('.p-form').attr("data-num"),
            value: gcValue,
            type: "estimation",
            zipcode: $("#zipcode").val(),
            countryShortCode: $("#shippingCountryShortCode").val()
        },
        function (data) {
            if (data.result === 1) {
                var price = (parseFloat(data.thisProduct.price)).formatMoney().split(".");
                $main.find(".js-price").html(price[0]);

                var totalAmt = parseFloat(data.thisProduct.price);
                if ($main.find('.js-sub-price').length > 0) {
                    $main.find('.js-sub-price').each(function () {
                        totalAmt += parseFloat($(this).attr("data-price"));
                    });
                }
                totalAmt = totalAmt.formatMoney().split(".");
                $main.find('.js-amount').html(totalAmt[0]);
                //updateCostInfo(data, $main, $priceInfo)
                displayEstimationData(data);
            } else {
                alertEx(data.msg);
            }
        },
        'json'
    );
}

function isValidAmount($obj, type
) {
    if (type === undefined) {
        type = "giftCertificate";
    }
    if ($obj.val() !== '') {
        var amount = $obj.val();
        amount = amount.replace(/[^\d]/g, '');
        $obj.val(amount);
        if (isNaN(parseFloat(amount))) {
            //alert('Please enter a valid amount.');
            alertEx(cartStr('enter_valid_amount'));
            $obj.val('');
            return false;
        } else {
            amount = parseFloat(amount);
            if (amount === 0) {
                //alert('Please enter or select an amount.');
                alertEx(cartStr('enter_select_amount'));
                return false;
            }

            if (type === "giftCertificate") {
                giftCertificatValueUpdate($obj, amount);
            }
        }
    }
    return true;
}

</script>

                        var shippingRequired = 1;
                        var itemCountForDomesticShippingRate = 0;
                        var itemCountForInternationalShippingRate = 1;
                        var fixedDomesticShippingCost = 65.00;
                        var fixedInternationalShippingCost = 0.00;

                        var shopping_cart_height = 0;
                        var u_travelCost = -1;
                        var distance = -2;
                        var errorMessage = "";

                        function cartStr(index, replace
                    ) {
                        var strings = {
                        'Shipping'                           : "Shipping",
                        'details_needed'                     : "Details Needed",
                        'enter_correct_email'                : "Please enter correct email.",
                        'select_date_after_change_duration'  : "Please re-select a date and time after you change the duration of the event.",
                        'suggest_enter_date_and_location'    : "We suggest you submit <span>both Date\/Time<\/span> and <span>Location<\/span>. Your experience will not be officially booked until both Date\/Time and Location are agreed upon. <br><br>Are you sure you would like to proceed?",
                        'select_date_after_from_now'         : "Please select a date after %numberOfDays% days from now.",
                        'title_tbd'                          : "TBD",
                        'title_included'                     : "Included",
                        'shipping_estimate_head'             : "To: %countryShortCode%, %shippingZip%",
                        'person'                             : "person",
                        'people'                             : "people",
                        'hour'                               : "hour",
                        'hours'                              : "hours",
                        'enter_valid_amount'                 : "Please enter a valid amount.",
                        'enter_select_amount'                : "Please enter or select an amount",
                    };

                        if (typeof strings[index] === 'undefined') {
                        return index;
                    } else {
                        var str = strings[index];
                        if (typeof replace === 'object') {
                        for (var key in replace) {
                        str = str.replace(key, replace[key]);
                    }
                    }
                        return str;
                    }
                    }
                        /!**************************************** Layout Preparing ********************!/
infoBoxLayOutPreparing();

// set .
// using display: table; display:table - cell to verticle center the .
price - info
if (!g_is_mobile){
    $(".p-block .p-block-2").each(function () {
        if ($(this).height() > $(this).siblings(".p-block-1").height()) {
            $(this).siblings(".p-block-1").css('min-height', $(this).height());
        } else {
            $(this).css('min-height', $(this).siblings(".p-block-1").height());
        }
    });
}

$(".p-form .
info - box
").each(function(){

})
;

$(window).load(function (){
    var pos = !isHandheld();

    $("#overBooked-notification").appendTo('body');
    $("#overBooked-notification").overlay({
        top: 60, left: getPopupLeftToCenter("overBooked-notification"), fixed: pos, closeOnClick: true,
        mask: {color: '#000000', loadSpeed: 200, closeSpeed:0, opacity: 0.5}
    });
})
;

/!**************************************** Layout Preparing ********************!/
ioReady(function (){

    if ( ! g_is_mobile) {
        var top_margin = $("#product-table").offset().top - 95;
        var top_offset = 45;

        var c_bottom = $("#left-block").offset().top + $("#left-block").height();

        $(document).scroll(function(){
            var scrollTop = $(document).scrollTop();
            //console.log('top_margin:' + top_margin + ' | ' + 'c_bottom:' + c_bottom + ' | ' + 'scrollTop:' + scrollTop);

            var rtl = $("#right-block").hasClass('rtl');
            var $rightBlock = $("#right-block");

            if(rtl){
                $rightBlock.css('left', 0 );
            }
            else{
                $rightBlock.css('right', 0);
            }

            if (scrollTop > top_margin){
                if(scrollTop + $("#right-block").height() + 150 > c_bottom){
                    var c_top = $("#shopping-cart .box").height() - $("#right-block").height() - 155;
                    $rightBlock.css({position: "relative", top:c_top});
                } else {
                    $rightBlock.css({position: "absolute", top: (scrollTop - top_offset) + "px"});
                }
            } else {
                $rightBlock.css({position: "relative", top: 0});
            }

        });
    }

    // Special Code for MasterCard temp user - see dialog in _cart_content.php
    // url of the product in the cart is '#' to prevent user to go to PDP

    // var left = g_is_mobile ? 10 : getPopupLeftToCenter("pdDetailsOverlay");
    var prev_pid  = "";
    var pid  = "";
    $("#pdDetailsOverlay").appendTo("body");
    $("#pdDetailsOverlay").overlay({
        top: 100, left: 'center', fixed: true, closeOnClick: true,load: false,
        mask: {color: '#000000', loadSpeed: 200, opacity: 0.5},
        onLoad: function(){
            ga('send', 'pageview', 'Age Verification');
            $.post('/website/logPageView',{'pageId':this.getOverlay().attr('id')},function(data){},'json');
        },
        onBeforeLoad: function(){
            if (pid !== prev_pid) {
                prev_pid = pid;
                $.post( '/product/getProductDescription', {pid : pid},
                    function(data){
                        if(data.result === 0){
                            alertEx("Error Occured Please Try Again");
                        } else {
                            $("#pdDetailsOverlay .product-desc").html(data.details);
                            // $("#pdDetailsOverlay .fineprint").html(data.finePrint);
                        }
                    }, 'json');
            }
        }
    });

    $(".js-pdpDetails").click(function(){
        if($(this).attr('href') === "#"){
            pid = $(this).attr('pid');
            $("#pdDetailsOverlay").overlay().load();
            return false;
        } else {
            return true;
        }
    });

    $("#customer-support").click(function(){
        showConciergeEmailPopup();
        return false;
    });

    //==========================================================================

    $("#shipping-estimation .help_popUp").click(function(){
        if (g_is_mobile) {
            $("#shipping_estimate_help_dialog").css({right: '10px', top: '100px'});
        } else {
            $("#shipping_estimate_help_dialog").css({left: '-300px', top: '-40px'});
        }
        $("#shipping_estimate_help_dialog").toggle();
        return false;
    });
    $("#shipping_estimate_help_dialog .close").click(function(){
        $("#shipping_estimate_help_dialog").hide();
    });

    $("#shipTo").click(function(){
        $(".estimation-block").show();
    });

    //==========================================================================

    if ( ! g_is_mobile) {
        $("#product-table .tip .convert-tip, #product-table .tip .remove-tip").mouseleave(function(){
            $(this).hide();
            return false;
        });
        $("#product-table .convert a").mouseenter(function(){
            $(this).parent().parent().find(".convert-tip").show();
            return false;
        });
        $("#product-table .convert a").mouseleave(function(e){
            if (e.relatedTarget) {
                if ($(e.relatedTarget).hasClass('convert-tip') ||
                    $(e.relatedTarget).parent().hasClass('convert-tip')) {
                    return false;
                }
            }
            $(this).parent().parent().find(".convert-tip").hide();
            return false;
        });
        $("#product-table .remove a").mouseenter(function(){
            $(this).parent().parent().find(".remove-tip").show();
            return false;
        });
        $("#product-table .remove a").mouseleave(function(e){
            if (e.relatedTarget) {
                if ($(e.relatedTarget).hasClass('remove-tip') ||
                    $(e.relatedTarget).parent().hasClass('remove-tip')) {
                    return false;
                }
            }
            $(this).parent().parent().find(".remove-tip").hide();
            return false;
        });
    }


//    $("#product-table .addAddress").click(function(){
//        ga('send', 'event', 'Cart', 'Add Address');
//        $("#location-productName").html($(this).attr("pname"));
//        $("#location-productId").val($(this).attr("pid"));
//        $("#location-number").val($(this).attr("number"));
//        $("#cart-calendar .location-celebId").val($(this).attr("cid"));
//
//        return false;
//    });

    //=========================================  Duration Change  ==============
    $(".js-durationMinutes").change(function(){
        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');
        //$(this).closest('.info').find('.schedule-container .schedule').attr('duration',parseInt($(this).val()));
        var dm      = (parseInt($(this).val()) * 60);
        var pId     = $(this).closest('.p-form').attr("data-pid");
        var number  = $(this).closest('.p-form').attr("data-num");
        $.post( '/cart/updateSocialInfo', {
                productId        : pId,
                number           : number,
                durationMinutes  : dm,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);

                    $main.siblings(".p-block").find(".js-p-form").attr("data-dm",dm);
                    if ($main.siblings(".p-block").find(".js-p-form .schedule-button.preCheckOutField input").val() !== "" ){

                        // clear the userSchedules for this product
                        $.post( '/cart/deleteSchedules', "productId=" + pId + "&number=" + number,
                            function(data){
                            },
                            'json'
                        );
                        alertEx(cartStr('select_date_after_change_duration'));
                        $main.siblings(".p-block").find(".js-p-form .schedule-button.preCheckOutField input").val("");
                        draw_calendar_general($('#calendar-popUp'));
                        $('#calendar-popUp .cal-time .time').html("");
                        $('#calendar-popUp .schedule-wrapper input').val("");
                        $("#calendar-popUp .cal-day-box.day.selected").removeClass("selected");
                    }

                } else {
                    alertEx(data.msg);
                }
            },
            'json'
        );
    });

    //======================================  Number of Guest Change  ==========
    $(".js-numGuests").change(function(){
        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');
        var $this = $(this);

        // for buy with friends,  for a guest,  change the guest number attr when number of guests changed. VP-9655
        var $form = $this.closest('.js-p-form');
        if ($form.attr('data-isgroupbuytype') === '1' && $form.attr('data-master-oii') !== '0') {
            var people_val = $this.val()*1;
            var people_string =  people_val>1?getJsText('people'):getJsText('person');
            $this.closest('.info-box').children('.attr-row').find('.attr-guests .attr-val').text($this.val() + ' ' + people_string) ;
        }

        $.post( '/cart/updateSocialInfo', {
                productId        : $(this).closest('.p-form').attr("data-pid"),
                number           : $(this).closest('.p-form').attr("data-num"),
                numGuests        : $(this).val(),
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);
                } else {
                    alertEx(data.msg);
                }
            },
            'json'
        );
        return false;
    });
    //======================================  Quantity Change  =================
    $(".js-quantity-change").change(function(){
        ga('send', 'event', 'Checkout', 'QuantityUpdate');
        var $obj = $(this);
        var pid     = $obj.closest('.p-form').attr("data-pid");
        var num     = $obj.closest('.p-form').attr("data-num");
        var new_qty = $obj.val();
        $obj.closest('.body-row').find(".js-quantity").text(new_qty);
        $.post( '/cart/update', {
                productId        : pid,
                number           : num,
                quantity         : new_qty,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    $obj.closest('.body-row').find('.shipping-msg').html('<p>'+data.shippingMsg+'</p>');
                    var price      = $obj.closest('.body-row').attr("data-price"); // calculate locally
                    var new_amount = price * new_qty;
                    var localeId   = data.products[0].localeId;

                    $obj.closest('.body-row').find(".js-amount").html(g_locale.formatCurrency(new_amount, undefined, localeId, true));

                    // need to update hyatt points for price change if world of hyatt member
                    if($('.hyatt-points-sec').length > 0) {
                        var pBlock2 = $obj.closest('.p-block-1').siblings('.p-block-2');
                        pBlock2.find('.js-total-sum').html(new_amount.formatMoney().replace(/\.0+$/,''));
                        var points = g_locale.formatNumber(calculateHyattPointsConversion(new_amount), false, false, false);
                        pBlock2.find('.hyattTotalPoints').html(points);
                    }
                    displayEstimationData(data);
                    if(!g_is_mobile){
                        getCartPopupHtml(false, false);
                    }
                    ga('send', 'pageview', 'Shopping Bag');
                } else {
                    alertEx(data.msg);
                }
            }, 'json');
        return false;
    });

    //======================================  addon Change  ================
    $(".customCheckBox span").click(function(){
        var parent_productId = $(this).closest(".js-p-form").attr("data-pid");
        var parent_number    = $(this).closest(".js-p-form").attr("data-num");
        var pid              = $(this).closest(".customCheckBox").attr("pid");
        var num              = $(this).closest(".customCheckBox").attr("data-number");

        if($(this).closest(".customCheckBox").hasClass("checked")){
            var action = "remove";
            $(this).closest(".customCheckBox").removeClass("checked");
        }else{
            var action = "add";
            $(this).closest(".customCheckBox").addClass("checked");
        }

        var $main = $(this).closest('.body-row').find('.main');
        var $priceInfo = $(this).closest('.body-row').find('.price-info');

        $.post( '/cart/UpdateSubproducts', {
                productId        : pid,
                number           : num,
                parent_productId : parent_productId,
                parent_number    : parent_number,
                action           : action,
                type             : "estimation",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    updateCostInfo(data, $main, $priceInfo);
                    displayEstimationData(data);
                } else {
                    alertEx(data.msg);
                }
            }, 'json');
        return false;
    });

    //======================================  Gift Certificate  ================
    $(".preCheckOutField .gift-cert-value").change(function(){

        var value   = "";

        if ($(this).val() === "own") {
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").show();
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").find("input").focus();
            //$("#CartItemSocialInfo_value").val($(this).closest(".preCheckOutField").next(".preCheckOutField.own input").val());
        } else {
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").hide();
            $(this).closest(".preCheckOutField").next(".preCheckOutField.own").find("input").val($(this).val());
            giftCertificatValueUpdate($(this), $(this).val());
            //$("#CartItemSocialInfo_value").val($(this).val());
        }
        return false;
    });
    $(".preCheckOutField .gift-cert-custom").focusout(function(){
        isValidAmount($(this));
    });


    //================================  For all input and textarea  ============
    $(".preCheckOutField input.js-general, .preCheckOutField textarea.js-general").focusout(function(){
        $(this).val($(this).val().trim());
        if ($(this).val() !== ""){
            if ($(this).hasClass("js-email")) {
                $(this).siblings(".errorMessage").remove();
                if (! validateEmail($(this).val())){
                    $("<p class='errorMessage'>"+cartStr('enter_correct_email')+"</p>").insertAfter($(this));
                    $(this).addClass("js-error");
                    return false;
                }else{
                    $(this).removeClass("js-error");
                }
            }

            var obj = {productId : $(this).closest('.p-form').attr("data-pid"),
                number    : $(this).closest('.p-form').attr("data-num"),
                type      : "no-estimation"};
            obj[$(this).attr("data-db-name")] = $(this).val();

            $.post( '/cart/updateSocialInfo', obj,
                function(data){
                    if (data.result === 1) {
                        // this doesn't change price
                    } else {
                        alertEx(data.msg);
                    }
                },
                'json'
            );
        }
    });

    //=============================  Only for PT 17 Entring address in cart  ===

    $(".start-checkout").click(function(){

        if (g_needCompleteSignup) {
            $("#redirectURL").val('');
            displayOverlay('complete-signup-dialog');
            return false;
        }


        //event.preventDefault();
        if(!actionBtnClickHandling($(this))){
            return false;
        }

        $obj = $(this);
        $("#product-table .preCheckOutField .js-required.required").removeClass("required");
        var complete = true;
        var scrollTo = "";
        var prevPid = "";
        var errCount = 0;
        var errClass = "";
        var $prevObj;
        var $currentObj;

        if($("#product-table .preCheckOutField .js-error:visible").length > 0){
            scrollTo = $("#product-table .preCheckOutField .js-error:visible").first().offset().top - 30 - 55 - 40;
            $('html, body').animate({scrollTop:scrollTo}, 400,function(){
                //alertEx("Please finish the required filed(s).");
            });

            actionBtnClickHandling($(this), "remove");
            return false;
        }


        $("#product-table .preCheckOutField .js-required:visible").each(function(){
            $currentObj = $(this);

            if ($(this).val() === "") {

                complete = false; errCount++;
                $(this).addClass("required");
                $(this).closest('.widget-row').find('.errorMessage').remove();

                if($prevObj !== undefined &&
                    $(this).closest('.nextProd').attr('data-pid') !== $prevObj.closest('.nextProd').attr('data-pid'))
                {
                    //Time to append errormessage
                    if(errorMessage !== "")  $prevObj.append("<p class='errorMessage'>"+errorMessage+"</p>");

                    //Clear Error Message
                    errorMessage = "";
                    if(g_is_mobile){
                        $prevObj.closest('.p-block').find('.price-info').css('border-top', '1px solid #e1e1e1');
                    }

                    errCount = 0;

                }
                //If more than one error message in a block remove bottom border for the blocks
                /!* if(errCount >= 1 && $prevObj !== undefined && !$prevObj.hasClass('js-gift-certificate')
                     && !$prevObj.children('.preCheckOutField.js-required:visible').is(':last-child')){
                     //$prevObj.find('input').css('border-bottom','none');
                 }*!/


                if($(this).attr('data-error') !== undefined && $(this).hasClass("required")) {
                    errorMessage += $(this).attr('data-error')+"<br />";
                }

                if(scrollTo === ""){
                    scrollTo = $(this).offset().top - 30 - 55 - 40;
                }
            } else {
                // If $prevObj is set but the current input field does not have
                // value and errormessage has value then append to prev obj if pids are not equal
                if($prevObj !== undefined &&
                    $(this).closest('.nextProd').attr('data-pid') !== $prevObj.closest('.nextProd').attr('data-pid'))
                {
                    //Time to append errormessage
                    if(errorMessage !== "")  $prevObj.append("<p class='errorMessage'>"+errorMessage+"</p>");

                    //Clear Error Message
                    errorMessage = "";
                    if(g_is_mobile){
                        $prevObj.closest('.p-block').find('.price-info').css('border-top', '1px solid #e1e1e1');
                    }

                    errCount = 0;
                }
            }

            $prevObj = $(this).closest('.widget-row');
            if($prevObj.children('.preCheckOutField:visible').length > 1){
                if(errorMessage !== "" && $prevObj.length > 0
                    && !$prevObj.hasClass('js-gift-certificate')
                    && $prevObj.find('input').hasClass('js-required')){
                    $currentObj.css('border-bottom','1px solid #FD6340');
                }
            }

            //Append error message to last block
            if(errorMessage !== ""){
                //VP-11833 Needed to add border top for personalized messages.
                //Error appeared to be in the textbox
                $prevObj.append("<p class='errorMessage sg-c-error sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right'>"+errorMessage+"</p>");
                //If more than one error message in a block remove top border for the blocks
                errCount = 0;
                errorMessage = "";
            }
        });

        if ( ! complete){
            $('html, body').animate({scrollTop:scrollTo}, 400,function(){
                //alertEx("Please finish the required filed(s).");
            });

            actionBtnClickHandling($(this), "remove");
            return false;
        }

        //Do Ajax post to check if the duration is available
        $.get( '/cart/checkDurationAvailable',
            function(data){
                if (data.result === 1) {
                    // Do Nothing
                    complete = true;
                } else if (data.loggedIn !== undefined && data.loggedIn === 0) {
                    // logged out or tempuser session expired
                    // illegal action - redirect to homepage
                    window.location.href = g_is_mobile ? "/m" : "/"; // For tempuser session expired, it will display Session Expired page
                } else {
                    complete = false;

                    /!*
                    $('#conversationOverlay-dialog .celebrity-img').attr('src', data.celebImg);
                    $('#conversationOverlay-dialog .celebrity-name').html(data.celebName);
                    $('#conversationOverlay-dialog .subject-txt').val(data.productName);
                    *!/

                    var contact_link = $('#overBooked-notification .vendor-contact-us');
                    contact_link.attr('pid', data.productId);
                    contact_link.attr('service_vendorid', data.service_vendorId);
                    contact_link.attr('data-imgsrc', data.vendorImg);
                    contact_link.attr('data-id', data.service_vendorId);
                    contact_link.attr('data-name', data.vendorName );


                    $('.overBooked-vendorName').html(data.celebName);
                    $('.overBooked-timeRange').html(Math.abs(data.difference));
                    $('.overBooked-windowSize').html(data.windowSize);
                    $("#overBooked-notification").overlay().load();

                    actionBtnClickHandling($obj, "remove");
                    return false;
                }

                if (complete){
                    // encourage customer to fill out all info for redemption items

                    var redir = true;
                    $("#product-table .preCheckOutField .js-recommended:visible").each(function(){
                        if ($(this).val() === "") {
                            redir = false;
                            confirmEx(cartStr('suggest_enter_date_and_location'),
                                cartStr('details_needed'),
                                function(){
                                    window.location = (g_is_mobile ? "/m" : "") + "/cart/checkout";
                                },
                                function(){
                                    $(".start-checkout").removeClass('disabled');
                                },
                                'yes',
                                'no');
                            return false;
                        }
                    });

                    if (redir === true) {
                        window.location.href = (g_is_mobile ? "/m" : "") + "/cart/checkout";
                    }

                }
            },
            'json'
        );

    });

    $(".vendor-contact-us").click(function(){
        $("#overBooked-notification").overlay().close();

        questionPopUp($(this));

        /!*
        $('#conversationOverlay-dialog .celebrity-img').attr('src', $('.conversation-celebImg').val());
        $('#conversationOverlay-dialog .celebrity-name').html( $('.conversation-celebName').val());
        $('#conversationOverlay-dialog .subject-txt').val( 'About ' + $('#conversationOverlay-dialog .subject-txt').val());
        $("#conversationOverlay-dialog").overlay().load();
        *!/
        return false;
    });

    $('.datetimepicker').each(function(){
        var showTim = ( ($(this).attr("date-pt") === '18')? false: true);
        $(this).datetimepicker({
            minDate: (parseInt($(this).attr("date-mindate")) + 1),
            showTimepicker: showTim  ,
            onClose: function(dateText) {
                dateText = dateText.trim();
                if(dateText === '') {
                    return true;
                }
                var timeToPostDaysInAdvance = parseInt($(this).attr("date-mindate"));
                var timestamp = new Date().getTime() + (timeToPostDaysInAdvance * 24 * 60 * 60 * 1000);
                var selected = new Date(dateText);
                if (timestamp > selected) {
                    alertEx(cartStr('select_date_after_from_now', {'%numberOfDays%':timeToPostDaysInAdvance}));
                    $(this).val('');
                }else{
                    $.post( '/cart/updateSocialInfo',
                        "&productId="+$(this).closest('.p-form').attr("data-pid") +
                        "&number="+$(this).closest('.p-form').attr("data-num") + "&timeToPost="+dateText+":00",
                        function(data){
                            if (data.result === 1) {

                            } else {
                                alertEx(data.msg);
                            }
                        },
                        'json'
                    );
                }
            }
        });
    });


    //========================================  Before Checkout  ===============
    // Check if Forms need to be Submitted

    $("#product-table").children('.locationAddress-container').each(function(){
        if($(this).find('.location-address').val() !== ""){
            $(this).find('.location-address-save').trigger('click');
        }
    });
    //==========================================================================
    $("#estimate-button").click(function(){
        if ($(this).hasClass('inactive')) return false;
        if ($("#zipcode").val() === '') {
            alertEx("Please enter a zip code.");
            return false;
        }
        if ($("#shippingCountryShortCode").val() === 'US' && $("#zipcode").val().length !== 5 ) {
            alertEx("Please enter a 5-digit zip code.");
            return false;
        }

        ga('send', 'event', 'Checkout', 'Estimate');
        var current = $(this);
        current.addClass('inactive');
        $('html, body').animate({scrollTop: 0},500);
        $("#shipping-estimation .estimation-block").hide();
        $("#shipping-estimation h2 span").removeClass('expanded');
        $("#shipping-estimation .estimation-result-block").show();
        $("#shipping").html('');
        $("#shipTo").html('');
        $("#tax").html('');
        $("#grandTotal").html('');                        //$('.productTotal_summary').html()
        $.post( '/cart/estimate',
            {
                type             : "shipping",
                zipcode          : $("#zipcode").val(),
                countryShortCode : $("#shippingCountryShortCode").val()
            },
            function(data){
                if (data.result === 1) {
                    displayEstimationData(data);
                } else {
                    alertEx(data.msg);
                }
                $("#shipping-estimation .estimation-expand").removeClass('expanded');
                current.removeClass('inactive');
            }, 'json');
        return false;
    });

    $(".top-warning .js-goto-wishlist").click(function() {
        if($(this).hasClass("mobile")){
            location.href = "/m/wishlist";
        }else{
            $('html, body').animate({
                scrollTop: $("#cart-wishlist").offset().top - 100
            }, 1500);
        }

        return false;
    });

    $(".top-warning img").click(function() {
        $(this).parent().fadeOut('slow');
    });

    $("#shipping-estimation h2, #shipping-estimation .estimation-expand").click(function(){
        if($("#shipping-estimation .estimation-expand").hasClass('expanded')){
            $("#shipping-estimation .estimation-block").slideUp();
            $("#shipping-estimation .estimation-expand").removeClass('expanded');
        } else {
            $("#shipping-estimation .estimation-block").slideDown();
            $("#shipping-estimation .estimation-expand").addClass('expanded');
        }
        return false;
    });


})
;

function displayEstimationData(data) {
    var productTotal = 0;

    if(data.productTotal){
        productTotal = parseFloat(data.productTotal);
    }

    var localeId = g_user_locale.localeId;
    if($.isArray(data.products) && data.products.length>0){
        localeId = data.products[0].localeId;
    }
    else if ( data.thisProduct !== undefined){
        localeId = data.thisProduct.localeId;
    }
    else {
    }

    var pointStr = "%points% Point";
    var pointsStr = "%points% Points";

    if ('Hyatt_redemptionOnly' in data && data['Hyatt_redemptionOnly'] && 0) {
        var productTotalPoints = g_locale.formatNumber(calculateHyattPointsConversion(productTotal), false, false, false);
        var htmlPoints = '';

        if (productTotalPoints != 1) {
            htmlPoints = pointsStr.replace('%points%', productTotalPoints);
        } else {
            htmlPoints = pointStr.replace('%points%', productTotalPoints);
        }

        $('#estimate-subtotal').html(htmlPoints);
        $('.productTotal_summary').html(htmlPoints);
    } else if ('hyattPointsPrice' in data && 'hyattPointsTotal' in data && 0) {
        price = data.hyattPointsPrice;
        total = data.hyattPointsTotal;
        $('.productTotal_summary').html(data.hyattPointsTotal);
    } else {
        $('#estimate-subtotal').html(g_locale.formatCurrency(productTotal, undefined, localeId, true));  //productTotal.formatMoney()
        $('.productTotal_summary').html(g_locale.formatCurrency(productTotal, undefined, localeId, true));   //productTotal.formatMoney()
    }

    if (data.shipping === 0) {
        if (data.chargedPostCheckout === '1') {
            $("#shipping").html(cartStr("title_tbd"));
            $(".help_dialog.shipping-tip").slideToggle('slow');
        } else if (data.shippingRequired === '0') {
            $(".shipping-amount").html(g_locale.getCurrencySymbol(localeId) + '0.00');
        } else {
            $("#shipping").html(cartStr("title_included"));
        }
        if (data.shippingInfo !== null && data.shippingInfo.result === 0) {
            alertEx(data.shippingInfo.msg, cartStr('Shipping'));
        }
    } else {
        if(data.shipping !== undefined){
            $("#shipping").html(g_locale.formatCurrency(data.shipping, undefined, localeId, true));   //data.shipping.formatMoney()
        }
        if (data.chargedPostCheckout) {
            $(".help_dialog.shipping-tip").slideToggle('slow');
        }
    }
    $("#shipTo").html(cartStr('shipping_estimate_head', {
        '%countryShortCode%' : $("#shippingCountryShortCode option:selected").html(),
        '%shippingZip%'      : data.shippingZip
    }));

    if ((data.tax - data.taxIncluded) >= 0.01) {
        $("#tax").html(g_locale.formatCurrency(data.tax - data.taxIncluded, undefined, localeId, true));    //data.tax.formatMoney()
    }
    else{
        $("#tax").closest("div").hide();
    }

    if (typeof data.totalTravelCost !== 'undefined') {
        var travelTotal  = parseFloat(data.totalTravelCost);
        $('.travelTotal_summary').html(g_locale.formatCurrency(travelTotal, undefined, localeId, true));      //travelTotal.formatMoney()
        if (travelTotal > 0) {
            $(".js-total-travel-cost").show();
        } else {
            $(".js-total-travel-cost").hide();
        }
    }

    var total = 1*productTotal + 1*data.shipping + 1*data.tax;

    if ('Hyatt_redemptionOnly' in data && data['Hyatt_redemptionOnly'] && 0) {
        var productTotalPoints = g_locale.formatNumber(calculateHyattPointsConversion(total), false, false, false);
        var htmlPoints = '';

        if (productTotalPoints != 1) {
            htmlPoints = pointsStr.replace('%points%', productTotalPoints);
        } else {
            htmlPoints = pointStr.replace('%points%', productTotalPoints);
        }

        $("#grandTotal").html(htmlPoints);
        $(".grandTotal_summary").html(htmlPoints);

        $('#shipping').parent('p').parent('div').hide();
        $('#shipTo').parent('p').parent('div').hide();
    } else {
        $("#grandTotal").html(g_locale.formatCurrency(total, undefined, localeId, true)); // do not display grandTotal (grand total is applied promo and gc)  //total.formatMoney()
        $(".grandTotal_summary").html(g_locale.formatCurrency(total, undefined, localeId, true)); // copy #grandTotal display for total display in redemtpion cart
    }

    // update mini cart
    if (!g_is_mobile) {
        getCartPopupHtml(false, false);
    }

}

function updateCostInfo(data, $main, $priceInfo
){
    var localeId = data.thisProduct.localeId;

    var addOnPrice = 0;
    if (data.thisProduct.addOnPrice !== undefined) {
        addOnPrice = parseFloat(data.thisProduct.addOnPrice);
    } else if (data.products !== undefined)  {
        for(var i=0; data.products.length > i; i++) {
            if (data.products[i].isMaster === '1') {
                continue;
            } else if(data.products[i].parent_productId === data.thisProduct.productId) {
                addOnPrice += parseFloat(data.products[i].price);
            }
        }
    }

    var price = '';
    var total = '';

    if (data.thisProduct.Hyatt_redemptionOnly && 'hyattPointsPrice' in data && 'hyattPointsTotal' in data && 0) {
        data.thisProduct.isPickOneProduct = false;
        price = data.hyattPointsPrice;
        total = data.hyattPointsTotal;
    } else {
        price =  g_locale.formatCurrency(ioRound(data.thisProduct.price, 2), undefined, localeId, false);  //ioRound(data.thisProduct.price).formatMoney(0);
        total =  g_locale.formatCurrency(ioRound(parseFloat(data.thisProduct.price, 2) + addOnPrice), undefined, localeId, false);
    }

    if (data.thisProduct.isPickOneProduct) {
        var strPrice = 'Use Redemption Code';
        var pPrice     = ioRound(data.thisProduct.price, 2);
        var maxBenefit = ioRound(data.thisProduct.maxBenefit, 2);
        if (maxBenefit > 0 && pPrice > maxBenefit) {
            var str = '%s with Redemption Code';
            var payPrice = g_locale.formatCurrency(pPrice - maxBenefit, undefined, localeId, false); //(pPrice - maxBenefit).formatMoney(0);
            strPrice = str.replace('%s', payPrice);
        }
        $main.find('.js-price').html(strPrice);
        $main.find('.js-amount').html(strPrice);
        return;
    } else {
        $main.find('.js-price').html(price);
        $main.find('.js-amount').html(total);
    }

    var unitPrice = data.thisProduct.price;
    data.thisProduct.price         = parseFloat(data.thisProduct.price);
    data.thisProduct.numGuests     = parseInt(data.thisProduct.numGuests);
    data.thisProduct.durationHours = parseInt(data.thisProduct.durationHours);
    data.thisProduct.travelCost    = parseFloat(data.thisProduct.travelCost);

    console.log(unitPrice);
    var calStr = "";

    if($priceInfo.attr("data-gv") > 0 && $priceInfo.attr("data-dv") > 0){
        unitPrice = unitPrice / ( data.thisProduct.numGuests * data.thisProduct.durationHours );
        calStr    = g_locale.formatCurrency(unitPrice, undefined, localeId, false)  + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.numGuests + " " + (data.thisProduct.numGuests > 1 ? cartStr("people") : cartStr("person")) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.durationHours + " " + (data.thisProduct.durationHours > 1 ? cartStr("hours") : cartStr("hour"));
    }else if($priceInfo.attr("data-gv") > 0){
        console.log(data.thisProduct.numGuests);
        unitPrice = unitPrice / data.thisProduct.numGuests ;
        calStr    = g_locale.formatCurrency(unitPrice, undefined, localeId, false) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.numGuests + " " + (data.thisProduct.numGuests > 1 ? cartStr("people") : cartStr("person"));
    }else if($priceInfo.attr("data-dv") > 0){
        unitPrice = unitPrice / data.thisProduct.durationHours ;
        calStr    = g_locale.formatCurrency(unitPrice, undefined, localeId, false) + " &nbsp;&nbsp;x&nbsp;&nbsp; "
            + data.thisProduct.durationHours + " " + (data.thisProduct.durationHours > 1 ? cartStr("hours") : cartStr("hour"));
    }
    console.log(unitPrice);

    if (calStr !== ""){
        $priceInfo.find(".js-price-detail").html(calStr);
        $priceInfo.find(".js-price-total").text(price);

        //if we have addOn
        if (addOnPrice > 0) {
            $priceInfo.find(".js-price-addon-price").text(g_locale.formatCurrency(ioRound(addOnPrice), undefined, localeId, false));
            $priceInfo.find(".js-addon-cost").show();
        } else {
            $priceInfo.find(".js-addon-cost").hide();
        }

        if (data.thisProduct.travelCost > 0) {
            $priceInfo.find(".js-travel-cost").show();
            $priceInfo.find(".js-travel-cost-amt").text( g_locale.formatCurrency(data.thisProduct.travelCost, undefined, localeId, false) );
            $priceInfo.find(".js-total-sum").text( g_locale.formatCurrency( (parseFloat(data.thisProduct.price) + addOnPrice + data.thisProduct.travelCost),  undefined, localeId, false) );

            // need to update hyatt points for price change if world of hyatt member
            if($('.hyatt-points-sec').length > 0) {
                var points = g_locale.formatNumber(calculateHyattPointsConversion(parseFloat(data.thisProduct.price) + addOnPrice + data.thisProduct.travelCost), false, false, false);
                $priceInfo.find('.hyattTotalPoints').html(points);
            }
        } else {
            $priceInfo.find(".js-total-sum").text( g_locale.formatCurrency(parseFloat(data.thisProduct.price) + addOnPrice,  undefined, localeId, false) );
            $priceInfo.find(".js-travel-cost").hide();

            // need to update hyatt points for price change if world of hyatt member
            if($('.hyatt-points-sec').length > 0) {
                var points = g_locale.formatNumber(calculateHyattPointsConversion(parseFloat(data.thisProduct.price) + addOnPrice), false, false, false);
                $priceInfo.find('.hyattTotalPoints').html(points);
            }
        }
    }else{
        //alertEx("Unknow Error. Please contact Ifonly Admin");
    }
}

function addCommasForCart(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    x2 = x2.substring(0,3);
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
    //return x1;
}

function giftCertificatValueUpdate($obj, gcValue
){

    var $main   = $obj.closest('.body-row').find('.main');
    $.post( '/cart/updateSocialInfo', {
            productId        : $obj.closest('.p-form').attr("data-pid"),
            number           : $obj.closest('.p-form').attr("data-num"),
            value            : gcValue,
            type             : "estimation",
            zipcode          : $("#zipcode").val(),
            countryShortCode : $("#shippingCountryShortCode").val()
        },
        function(data){
            if (data.result === 1) {
                var price = (parseFloat(data.thisProduct.price)).formatMoney().split(".");
                $main.find(".js-price").html(price[0]);

                var totalAmt = parseFloat(data.thisProduct.price);
                if($main.find('.js-sub-price').length > 0){
                    $main.find('.js-sub-price').each(function(){
                        totalAmt += parseFloat($(this).attr("data-price"));
                    });
                }
                totalAmt = totalAmt.formatMoney().split(".");
                $main.find('.js-amount').html(totalAmt[0]);
                //updateCostInfo(data, $main, $priceInfo)
                displayEstimationData(data);
            } else {
                alertEx(data.msg);
            }
        },
        'json'
    );
}

function isValidAmount($obj, type
) {
    if(type === undefined){
        type = "giftCertificate";
    }
    if ($obj.val() !== '') {
        var amount = $obj.val();
        amount = amount.replace (/[^\d]/g, '');
        $obj.val(amount);
        if (isNaN(parseFloat(amount))) {
            //alert('Please enter a valid amount.');
            alertEx(cartStr('enter_valid_amount'));
            $obj.val('');
            return false;
        } else {
            amount = parseFloat(amount);
            if (amount === 0) {
                //alert('Please enter or select an amount.');
                alertEx(cartStr('enter_select_amount'));
                return false;
            }

            if(type === "giftCertificate"){
                giftCertificatValueUpdate($obj, amount);
            }
        }
    }
    return true;
}
*/

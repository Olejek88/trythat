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

/*
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

/*
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

                                /*
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
*/

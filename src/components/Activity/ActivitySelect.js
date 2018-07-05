import React from 'react';
import { observer } from 'mobx-react';

@observer
class ActivitySelect extends React.Component {
  render() {
    return (
        <div className="right-box action-box" style="margin-bottom: 40px;">
            <div className="p-attributes " data-productid="325">
                <h2 className="lum-name sg-f-dspl-s ">Alice Waters</h2>
                <p className="charity-name sg-f-bdy sg-c-2 ">
                    <img src="/images/icon_ribbon_000_new.png" style="width: 12.5px; ">
                        <span>Benefiting The Edible Schoolyard Project</span>
                </p>


                <div className="name-group" style="float:left; width: 100%; margin-top:34px;">
                    <h1 className="p-name sg-f-ttl">Dine in the Heart of the Chez Panisse Kitchen: A Convivial Supper at
                        an Iconic Restaurant</h1>
                    <div className="p-shortDesc body-text  sg-f-bdy" data-limit="68" data-height="132"
                         style="height: 68px;">
                        <p>Journey to the Berkeley restaurant where the farm-to-table and&nbsp;locally sourced
                            ingredients movement was invented. A special table is set just for you in the
                            kitchen,&nbsp;many consider the best seat in the house, and until now, one that was
                            impossible to reserve.</p>            <span
                        className="js-viewMore sg-c-primary sg-text-transform" data-selector="#pdp .p-shortDesc"
                        style="cursor: pointer; position: absolute; bottom: 0px; right: 0px; background-color: rgb(255, 255, 255);">... more</span>
                        <span className="js-viewLess sg-c-primary sg-text-transform" data-selector="#pdp .p-shortDesc"
                              style="cursor: pointer;"> less</span>
                    </div>
                </div>


                <!--
                <p style="float:right; font-family: Montserrat; font-size: 11px; letter-spacing: 0.140em; cursor: pointer; margin-top: 12px;" class="learnMore">LEARN MORE<img src="/images/arrow_more.png" style="width: 16px; margin-top: 4px; margin-left: 10px; float: right;" /></p>
                -->
                <div style="clear: both"></div>

            </div>


            <form name="orderDetail" id="order-detail" className="form"
                  action="/culinary/product/325/supper-in-the-kitchen-at-chez-panisse" method="POST">
                <input value="b60fb209b081b7f23b80dcd03d362bf01cfd1b3a" name="stk" type="hidden"> <input
                    id="guest-checkout" name="guest-checkout" value="0" type="hidden">
                    <div className="p-form" data-pid="325" data-num="0" data-oii="0" data-view="_preCheckoutForm_new"
                         data-vid="36" data-dm="150" data-blm="40320" data-mbld="365" data-mbb="0"
                         style="border: none; background: none;">
                        <div className="js-p-form product-section-p-form sg-bg-2 sg-bd-2 ">

                            <style>
                                .bwf_info_div * {color: #777777; font:inherit;}
                                .bwf_info_div .campaign_setup_link a {color:#00a94f; margin-top:10px; cursor:pointer;}
                                .bwf_info_div .buyWithFre_help{width:20px; position:absolute; right: 5px;}
                                .bwf_info_div .or_text{margin: 10px 0;}
                                .bwf_info_div .campaign_setup_link img {width:20px; position:relative; top:2px;}

                                .mobile.bwf_info_div {margin - top:0; background:white;}
                                .mobile.bwf_info_div .or_text {display:none;}
                                .mobile.bwf_info_div .campaign_setup_link img {top:0px;}
                                .mobile.bwf_info_div
                                #buyWithFriendsLink{margin - bottom: 0px; height: 50px; line-height: 50px;}

                                #buyWithFriendsLink

                                .not-buyable .priceText {display:none !important;}


                                .buyWithFre_help:focus {outline: #FFFFFF dotted 2px;} /*green default is same as button background*/

                                .buy-button-row.mobile #buynow-button {border - radius:0px}
                                #totalPrice {width:100%; word-wrap: break-word;}

                                .customCheckBox
                                .check {margin - top: 1px; width: 17px; height: 15px; background:url(/images/io/check_box.png) no-repeat 0 0;}
                                .customCheckBox.checked
                                .check {background:url(/images/io/check_box.png) no-repeat 0 -16px;}
                            </style>

                            <div className="info-box js-err-con ">
                                <table className="sg-bg-2 sg-bd-2 sg-no-bd-left sg-no-bd-right sg-no-bd-top"
                                       style="width: 100%;">
                                    <tbody>
                                    <tr className="sg-inline-top sg-f-hdr"
                                        style="padding: 10px; box-sizing: border-box; width: 100%;">
                                        <td className="attr-field loc js-attr-row attr-geographic sg-inline-flex-grow">
                                            <div>
                                                <img src="/images/icon_loc_000.png">
                                                    <p>Berkeley, California</p>
                                            </div>
                                        </td>
                                        <td className="attr-field js-attr-row attr-guests attr-guest2 sg-inline-flex-grow">
                                            <div>
                                                <img src="/images/icon_manypeeps_000-mbpng.png">
                                                    <div>
                                                        <p style="max-width:none;">2 people</p>
                                                        <p style="display:none">2 people</p>
                                                    </div>
                                            </div>

                                        </td>
                                        <td className="attr-field js-attr-row attr-duration attr-duration2 sg-inline-flex-grow">
                                            <div>
                                                <img src="/images/icon_clock_000.png">
                                                    <div>
                                                        <p>2.5 hours</p>
                                                    </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="widget-row" style="">
                                    <input value="" name="scenario" id="scenario" type="hidden"><input
                                        name="CartItemSocialInfo[userId]" id="CartItemSocialInfo_userId" type="hidden">
                                        <div
                                            className="sg-bg-2 sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right preCheckOutField displayonly_div event_venue_row  "
                                            style="padding: 10px;">
                                            <div className="sg-inline-top"
                                                 style="width:100%; position: relative; flex-wrap:nowrap;">
                                                <div className="sg-inline-middle displayonly_title "
                                                     style="padding-left: 30px; box-sizing: border-box;"></div>
                                                <p style="line-height:22px;">Chez Panisse <a
                                                    className="google-map-address-link "
                                                    onClick="(event || window.event).stopPropagation();"
                                                    href="https://www.google.com/maps/search/1517+Shattuck+Ave.+Berkeley+CA+94709+US?hl=en"
                                                    style="" target="_blank" title="Opens In New Window">Map it</a></p>
                                            </div>
                                            <div className="displayonly_content   "></div>
                                        </div>
                                        <div className="row preCheckOutField sg-bg-3" id="addPeople"><select
                                            peopleperitem="2"
                                            className="sg-f-hdr participants js-participants js-numGuests sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right"
                                            maxvalue="2" data-peopleexception="" incpriceperperson="0"
                                            onChange="_infobox_trigger_event(this, &quot;infobox_num_guests_changed&quot;)"
                                            style="width: 100%;display:none;" name="CartItemSocialInfo[numGuests]"
                                            id="CartItemSocialInfo_numGuests">
                                            <option value="2" selected="selected">2 people</option>
                                        </select><input className="js-ori-numGuests" value="2"
                                                        data-exceptionguestprice="" type="hidden">
                                            <div className="row" id="addPeopleError"
                                                 style="display:none; color: #FD6340 !important;font-family: georgia;font-style: italic;font-size: 13px; box-sizing:border-box; padding:5px 10px;">
                                                <p style="color: #FD6340 !important;font-family: georgia;font-style: italic;font-size: 13px; ">
                                                    Incorrect Number Of People
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row preCheckOutField sg-bg-3" id="addDuration"><input
                                            name="CartItemSocialInfo[durationMinutes]" className="js-durationMinutes"
                                            data-exceptiontime="" data-exceptiondurationprice=""
                                            id="CartItemSocialInfo_durationMinutes" value="2.5" maxvalue="2.5"
                                            type="hidden"><input name="CartItemSocialInfo[addDurationCost]"
                                                                 id="CartItemSocialInfo_addDurationCost" value="0"
                                                                 type="hidden"><input className="js-ori-durationMinutes"
                                                                                      value="2.5" type="hidden"></div>
                                        <div className="schedule-button preCheckOutField">
                                            <a href="javascript:;" className="allowAllUsers" tabIndex="-1">
                                                <input
                                                    className="sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-right sg-placeholder-primary js-display-date js-schedule calender-field  negotiate-schedule-picker  "
                                                    placeholder="Preferred Date And Time"
                                                    data-error="Please select date and time" readOnly="" value=""
                                                    onClick="_infobox_trigger_event(this, 'infobox_negotiate_schedule_clicked')"
                                                    tabIndex="0" style="background-image: url(/images/icon_cal_000-mbpng.png); background-repeat: no-repeat;
                    background-size: 22px; height: 44px; width: 100%; background-position-x: 10px;
                    background-position-y: center; box-sizing: border-box; padding: 10px; padding-left: 40px;"
                                                    type="text">
                                            </a><input className="js-date-1" name="Schedule[date][0]" value=""
                                                       type="hidden"><input className="js-date-2"
                                                                            name="Schedule[date][1]" value=""
                                                                            type="hidden"><input
                                            className="js-ori-date-1" value="" type="hidden"><input
                                            className="js-ori-date-2" value="" type="hidden"></div>
                                        <input value="0" name="optionsError" id="optionsError" type="hidden">
                                            <div className="row sub-prods-row clearfix">
                                                <input id="customRadioBoxInput" value="105048"
                                                       name="subproducts[option]" type="hidden">
                                                    <ul className="optionProducts"
                                                        style="float: left; margin-top: 8px; margin-left: 6px; width: 100%;">
                                                        <li className="customRadioBox optionProduct" pid="105048"
                                                            data-gc="0" data-sellerid="2269" data-pid="105048"
                                                            data-vid="36" data-dm="150" data-blm="40320" data-mbld="365"
                                                            data-mbb="0" data-num="0" data-oii="0"
                                                            data-inc-price-per-person="0" data-inc-price-per-hour="0"
                                                            price="2000.00" pricetext="US$1,000" producttypeid="13"
                                                            overridepricetext="" schedule="0" requestonly="0">
                                                            <span className="radio" tabIndex="0"></span> <span
                                                            className="label">8:30pm</span>
                                                        </li>
                                                        <li className="customRadioBox optionProduct" pid="105049"
                                                            data-gc="0" data-sellerid="2269" data-pid="105049"
                                                            data-vid="36" data-dm="150" data-blm="40320" data-mbld="365"
                                                            data-mbb="0" data-num="0" data-oii="0"
                                                            data-inc-price-per-person="0" data-inc-price-per-hour="0"
                                                            price="2000.00" pricetext="US$1,000" producttypeid="13"
                                                            overridepricetext="" schedule="0" requestonly="0">
                                                            <span className="radio" tabIndex="0"></span> <span
                                                            className="label">6:00pm</span>
                                                        </li>
                                                    </ul>
                                            </div>


                                            <style type="text/css">
                                                .customRadioBox span.label {cursor: pointer;}
                                                .callout-content .section-2 .buyBox {position: relative;}
                                                .optionProducts li {width:100%;}
                                            </style>

                                            <div className="clearAll"></div>

                                </div>
                                <div className="errorSummary js-error-summary"
                                     style="display:none; padding:5px 15px; background:white;">* Please select an option
                                </div>
                            </div>

                            <div className="buyBox  desktop " style="clear:both;">

                                <div className="price-sec sg-f-hdr  desktop  " style="">
                                    <p className="sg-inline-middle price " style="justify-content: space-between;">
                                        <span className="priceText">US$1,000/person</span>
                                        <span id="travelCostDisplay"></span>
                                        <span className="totalPriceText">
                            Total                            <font id="totalPrice" price="2000.00" incrementalprice="0">
                                US$2,000                            </font>
                        </span>

                                        <span className="soldout celeb-color sg-c-1"></span>
                                    </p>

                                    <!--
                                        click enent and the event handler are defined in the bottom of the file.
                                    -->
                                    <div className="clearAll"></div>
                                </div>

                                <div className="buy-button-row desktop " style="">
                                    <div id="buynow-button" style="width:100%"
                                         className=" sg-text-transform  primaryButton button" data-pid="325" pid="325"
                                         price="2000.00" lvl="1" mastercardtype="" tabIndex="0">
                                        <div className="title-container"><p className="title">buy now</p></div>
                                    </div>
                                </div>
                                <div className="clearAll"></div>

                            </div>


                            <style type="text/css">
                                #calendar-popUp
                                .errorMessage{display:none; text-align: left; margin-bottom: 0;font-size:13px; color:#FD6340;font-family:georgia;font-style: italic;}
                            </style>

                            <script type="text/javascript">
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
                                */
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


                            </script>

                            <style type="text/css">
                                #order-detail .fieldBox > div {float:left}
                                #order-detail .fieldBox .labelText {display: block; margin-bottom:5px;}
                                #order-detail .formFields input, #order-detail .formFields select{margin: 15px 0;}
                                #order-detail .fieldBox input {width: 250px; height: 20px; padding: 5px;}
                                #order-detail .fieldBox textarea {width:335px; height:25px; padding:5px;}

                                .product-content #order-detail .dateSeletotalPriceTextct
                                label{position: absolute; top: 2px; left: 5px;
                                background: url('/images/io/calendar.png') no-repeat 163px 5px;
                                line-height: 32px; display:block; width: 185px;}

                                .subproduct-list {position:relative;
                                background-color: #fff;
                                /* border: 1px solid #e1e1e1; */
                                border-top: none;
                                padding-left: 5px;
                                /* padding-top: 5px; -- Brinda - Commented because if subproduct-list not present it adds an additional height*/
                                width: 85%;
                                width: -webkit-calc(100% - 7px);
                                width: -moz-calc(100% - 7px);
                                width: calc(100% - 7px);
                                width: calc(100% - 7px);
                                box-sizing: border-box;
                            }
                                .subproduct-list li {line - height: 24px;}
                                .subproduct-list li input {margin - right:7px;}

                                .errorSummary li {margin:0;}
                                .locationHint{position:absolute;top:8px;left:58px;}
                                .locationHintDesc{display:none; width:100px;length:10px;border: 1px solid rgb(225, 225, 225);
                                box-shadow: 0px 1px 25px #999;z-index: 10;-webkit-box-shadow: 0px 1px 25px #999;
                                -moz-box-shadow: 0px 1px 25px #999;background-color: #ffffff;width: 190px;padding: 15px;
                                display: none;position: relative;margin-top: -130px;margin-left: -102px;}
                                .product-section.mobile #travelCostDisplay{font - family: Georgia; color: #e1e1e1;}

                            </style>


                            <script type="text/javascript">
                                $(document).ready(function (){

                            })
                            ;
                            </script>
                        </div>
                        <style>
                            .wishlist.secondaryButton:hover{background - color:white;}
                            .wishlist.secondaryButton:hover .title {color: #00A94F}
                        </style>
                        <div className="social_wiget_div sg-f-hdr sg-bd-2 desktop " style="text-align:center">
                            <div className="wishlist  secondaryButton sg-cursor " pid="325" lvl="1" tabIndex="0">
                                <div className="pdp heart_img" pid="325"></div>
                                <p className="pdp wishlist-text title sg-text-transform">add to wishlist</p></div>
                            <table className="btn_table sg-bd-2 sg-no-bd-bottom sg-no-bd-left sg-no-bd-right">
                                <tbody>
                                <tr>
                                    <td className="left_td share_td sg-bd-2 sg-no-bd-top sg-no-bd-left sg-no-bd-bottom  "
                                        style=""><a href="#" className="button sg-inline-middle" lvl="2"
                                                    id="sweepstake-share" data-type=""
                                                    style="justify-content:center"><img
                                        style="width:28px; vertical-align: middle;"
                                        src="/images/icon_share_green.png"><span
                                        className="sg-text-transform txt-ovr-2 sg-hover-primary">share</span>
                                    </a></td>
                                    <td className="right_td question_td" style="">
                                        <div className="phone pdp_question_mark  button sg-inline-middle allowAllUsers"
                                             lvl="2" style="" service_vendorid="0" seller_vendorid="2269" pid="325"
                                             data-origin="productPage" data-siteid="1" data-type="product" data-id="325"
                                             data-imgsrc="https://d5xydlzdo08s0.cloudfront.net/media/celebrities/36/waters_350px__L.jpg"
                                             data-name="IfOnly"
                                             data-subject="About Supper in the Kitchen at Chez Panisse" tabIndex="0">
                                            <div className="sg-chatbubble "></div>
                                            <span className="txt-ovr-2 sg-hover-primary sg-text-transform"
                                                  style="padding:0 0 0 5px;">ask a question</span></div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <style>
                            #sweepstake-share-dialog.mobile .close{top:0; right: 0;}
                        </style>


                        <style type="text/css">
                            #sweepstake-email-share-select-all {width:280px; padding-left:24px; margin: 18px 0 16px 10px; float:left; font-family: "source-sans-pro-n4"; text-align:left; line-height:16px; background: url(/images/io/check_box.png) no-repeat;cursor: pointer;}
                            #sweepstake-email-share-select-all.selected {background: url(/images/io/check_box.png) no-repeat scroll 0 -16px;}

                            #sweepstake-email-share-list {width:640px; height: 300px; max-width: 100%; overflow: auto; margin: 0 auto;}
                            #sweepstake-email-share-list
                            li {width:300px; float:left; height:34px; cursor: pointer; padding-left: 10px; border-top:1px solid #f1f1f1;}
                            #sweepstake-email-share-list li:nth-child(4n+1) {background:#f1f1f1;}
                            #sweepstake-email-share-list li:nth-child(4n+2) {background:#f1f1f1;}
                            #sweepstake-email-share-list li
                            span {width:24px; height:16px; float:left; margin-top:9px; background: url(/images/io/check_box.png) no-repeat;}
                            #sweepstake-email-share-list li.selected
                            span {background: url(/images/io/check_box.png) no-repeat scroll 0 -16px;}
                            #sweepstake-email-share-list li
                            p {float:left; width:275px; line-height: 34px; overflow: hidden; margin:0; text-align: left;}

                            .share-options {margin: 5px 0 35px 0; text-align: center;}
                            .share-options
                            .icon {width:40px; height: 40px; display:inline-block; border: 1px solid #000; border-radius: 26px; background-color: #fff; margin: 0 7px;
                            -webkit-transition: background 100ms ease-out 100ms;
                            -moz-transition: background 100ms ease-out 100ms;
                            -o-transition: background 100ms ease-out 100ms;
                            transition: background 100ms ease-out 100ms;
                        }
                            .share-options .icon
                            .fb {width:100%; height: 100%; background: url('/images/icon_fb_000.png') no-repeat center center / 25px auto;}
                            .share-options .icon
                            .tw {width:100%; height: 100%; background: url('/images/icon_twitter_000.png') no-repeat center center / 25px auto;}
                            .share-options .icon
                            .em {width:100%; height: 100%; background: url('/images/icon_email_000.png') no-repeat center center / 25px auto;}
                            .share-options a:hover .icon {border: 1px solid #00A94F; background-color: #fff;}
                            .share-options a:hover .icon
                            .fb {background: url('/images/icon_fb_green.png') no-repeat center center / 25px auto;}
                            .share-options a:hover .icon
                            .tw {background: url('/images/icon_twitter_green.png') no-repeat center center / 25px auto;}
                            .share-options a:hover .icon
                            .em {background: url('/images/icon_email_green.png') no-repeat center center / 25px auto;}
                            .email-options {margin - top: 10px; text-align: center;}
                            .email-options
                            .icon {margin: 0 10px; display:inline-block; padding: 10px; border: 1px solid #e1e1e1;}
                            .email-options .icon img {height:40px;}

                            .g-recaptcha > div {margin: 0 auto;}
                        </style>
                        <link rel="stylesheet" type="text/css" href="/scripts/progress.css">
                            <script type="text/javascript" src="https://apis.google.com/js/client.js"
                                    gapi_processed="true"></script>
                            <script src="https://www.google.com/recaptcha/api.js"></script>
                            <script type="text/javascript">

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
                            </script>
                            <div className="clearAll"></div>
                    </div>
            </form>
        </div>
    );
  }
}

export default ActivitySelect;

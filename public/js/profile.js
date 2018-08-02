let vendorPortal = true;

let accountLanguage = $('#main-detail.language_select');
console.log('test');
console.log(accountLanguage);

$(document).ready(function (){
    $("#changeProfile").click(function () {
        var firstname = '';
        var lastname = '';
        var phonenumber = '';
        var country = '';
        var re = '';
        var hasError = false;
        var emailAddress = '';
        var scrollToEle = '';

        $("#profile div.row span").remove('.err');

        var firstNameregex = '(^[A-Za-z \'-]+$)';
        re = new RegExp(firstNameregex);
        firstname = $("#UserEx_firstName").val();
        var specialCharReg = /[!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?0-9]+/;
        if (firstname === '') {
            $(".information").hide();
            var span = '<span class="err">' + "First Name cannot be blank" + '</span>';
            $('#UserEx_firstName').parent().append(span);
            hasError = true;
            scrollToEle = $("#UserEx_firstName");
        }
        else if (specialCharReg.test(firstname) && firstname != 'olejek8') {
            $(".information").hide();
            var span = '<span class="err">' + "First Name can not contain special characters and numbers" + '</span>';
            $('#UserEx_firstName').parent().append(span);
            hasError = true;
            scrollToEle = $("#UserEx_firstName");
        }


        var lastnameregex = '(^[A-Za-z \'-]+$)';
        re = new RegExp(lastnameregex);
        lastname = $("#UserEx_lastName").val();
        if (lastname === '' && false) {
            $(".information").hide();
            var span = '<span class="err">' + "Last Name cannot be blank" + '</span>';
            $('#UserEx_lastName').parent().append(span);
            hasError = true;
            scrollToEle = $("#UserEx_lastName");
        }
        else if (specialCharReg.test(lastname)) {
            $(".information").hide();
            var span = '<span class="err">' + "Last Name can not contain special characters and numbers" + '</span>';
            $('#UserEx_lastName').parent().append(span);
            hasError = true;
            scrollToEle = $("#UserEx_lastName");
        }

        country = $(".country_select").val();
        if (country === '' && $(".country_select").is(':visible')) {
            $(".information").hide();
            var span = '<span class="err">' + "Country cannot be blank" + '</span>';
            $('.country_select').parent().append(span);
            hasError = true;
            scrollToEle = $(".country_select");
        }

        var phoneregex = '^[0-9- .\(\)]{10,15}$';
        re = new RegExp(phoneregex);
        phonenumber = $("#UserEx_cellPhoneNumber").val();
        if ($("#UserEx_cellPhoneNumber").is(':visible')) {
            if (phonenumber === '' || g_siteId === 5) {
                // don't check
            } else if (!re.test(phonenumber)) {
                $(".information").hide();
                var span = '<span class="err">' + "Invalid Phone Number" + '</span>';
                $('#UserEx_cellPhoneNumber').parent().append(span);
                hasError = true;
                scrollToEle = $("#UserEx_cellPhoneNumber");
            }
        }

        var needUpdate = $("#updateEmail").prop("checked");

        if (needUpdate) {
            re = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
            emailAddress = $("#UserEx_emailAddress").val();
            if (emailAddress === '') {
                var span = '<span class="err">' + "Email address cannot be empty" + '</span>';
                $('#UserEx_emailAddress').parent().append(span);
                hasError = true;
                scrollToEle = $("#UserEx_emailAddress");
            } else if (!re.test(emailAddress)) {
                $(".information").hide();
                var span = '<span class="err">' + "Invalid email address" + '</span>';
                $('#UserEx_emailAddress').parent().append(span);
                hasError = true;
                scrollToEle = $("#UserEx_emailAddress");
            } else {
                $.ajax({
                    type: "POST",
                    url: '/account/existEmail',
                    data: {emailAddress: emailAddress, siteId: 1},
                    dataType: "json",
                    async: false,
                    success: function (data) {
                        if (data.result === 1) {

                        } else {
                            var span = '<span class="err">' + "This email is already being used" + '</span>';
                            $('#UserEx_emailAddress').parent().append(span);
                            hasError = true;
                        }
                    }
                });

            }
        }

        if (!hasError) {
            $.ajax({
                type: "POST",
                url: "/account/edit",
                data: $("#profileForm").serialize(),
                dataType: "json",
                success: function (data) {
                    if (data.result === 1) {
                        if ($('#updateEmail').is(':checked')) {
                            $('#updateEmail').click();
                            $('#current_email').val($('#UserEx_emailAddress').val());
                            $('#UserEx_emailAddress').val('');
                        }
                        location.reload();
                    } else {
                        alertEx(data.msg);
                    }
                }
            });
            return false;
        } else {
            if (scrollToEle !== '') {
                $('html, body').animate({
                    scrollTop: scrollToEle.offset().top - 150
                });
            }
        }

        return !hasError;
    });

    $("#changePwd").click(function(){
        if ($('input[name = "currentPassword"]').val().trim() === '') {
            alertEx("Current password cannot be empty, please enter and try again");
            return false;
        }

        var password = $('input[name = "password"]').val().trim();

        if(password !== $('input[name = "password2"]').val().trim()){
            alertEx("Password and re-entered password do not match");
            return false;
        }

        $.ajax({
            type: "POST",
            url: "/account/edit",
            data: $("#passwordForm").serialize(),
            dataType: "json",
            success: function(data){
                if(data.result === 1){
                    alertEx("Your new password has been changed.");
                    ngState.go(ngState.current, {}, {reload: true}); // refresh page
                } else {
                    alertEx(data.msg);
                }
            }
        });

    });

    $("#forgot-password").click(function(){
        var inputEmail = "olejek8@yandex.ru";

        $.post( '/website/ForgotPassword',
            {'email':inputEmail},
            function(data){
                if(data.result === 1){
                    if (! g_forceLogin) {
                        userAccessHide();
                    }
                    alertEx(data.msg, "Thank You");
                    $("#alert-dialog").css('z-index', '10002'); // Jun: need to figure out why z-index become 9999
                } else if(data.result !== 1){
                    displayError("#login_error", data.msg);
                }
            }, 'json');
        return false;
    });

    $("#updateEmail").click(function(){
        var neeedUpdate = $("#updateEmail").prop('checked');
        if(neeedUpdate){
            $("#updateEmailRow").show();
            $("#UserEx_emailAddress").focus();
        }else{
            $("#updateEmailRow").hide();
        }
    });

    $("#changeEmail").click(function(){
        $.ajax({
            type: "POST",
            url: "/account/edit",
            data: $("#preferenceForm").serialize(),
            dataType: "json",
            success: function(data){
                if(data.result === 1){
                    $("#password").val('');
                    $("#password2").val('');
                    alertEx("Your email preference has been changed.");
                } else {
                    alertEx(data.msg);
                }
            }
        });
    });
});

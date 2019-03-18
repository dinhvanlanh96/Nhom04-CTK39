$(function () {
    $(".topbar-navigation").hide('400', function() {
        $('.loader').remove();
    });

    $(".class-item").hover(function () {
        $(this).find(".course-title").fadeOut(200);
        $(this).find(".hidden-content").fadeIn(500);
    }, function () {
        $(this).find(".hidden-content").fadeOut(500);
        $(this).find(".course-title").fadeIn(800);
    });

    var windowWidth = $(window).width();
    if( windowWidth >= 750 && windowWidth <= 1180 ) {
        $('body').scrollspy({target: '#navigationTop', offset: 120});
    } else {
        $('body').scrollspy({target: '#navigationTop', offset: 70});
    }

    $('#main-nav').affix({
        offset: {
            top: 60
        }
    });

    $('.navbar li > a[href*=\\#], .sidebar-nav a[href*=\\#], .action-button a[href*=\\#], .register a[href*=\\#]').click(function (event) {
        //remove anchor in url
//        event.preventDefault();

        var navHeight = 70;
        if( windowWidth >= 750 && windowWidth <= 1180 ) {
            navHeight = 120;
        }
        var page = $($.attr(this, 'href')).attr("id");
        var topOffset = $("#" + page).offset().top;
        var scrollTop = topOffset - (navHeight - 1); //-1 for scrollspy
        //var tempOffset = topOffset - $(window).scrollLeft();
        //console.log(page + ":" + topOffset + "- temp offset : " + tempOffset);
        if (page == "introduction") {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);

            //$(this).closest("li").addClass("active");

        }
        else {
            $('html, body').animate({
                scrollTop: scrollTop
            }, 1000);
        }

        showNavigation(false);
    });

    $('#back-top').click(function (event) {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#testimonial-slider').bxSlider({
        controls: false,
        //mode: 'fade',
        auto: true,
        speed: 500,
        pause: 60000,
        touchEnabled: false
    });

    $('.popup-iframe').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 400,
        preloader: false,
        fixedContentPos: true,
        iframe: {
            markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '</div>' +
                '<div class="video-title"></div>'
            ,

            srcAction: 'iframe_src'
        },
        callbacks: {
            beforeOpen: function() {
                console.log('Start of popup initialization');
            },
            open: function() {
                console.log('Popup is opened');
                var title = $('.hidden-title').val();
                console.log(title);
                $('.video-title').text(title)
            }
        }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
        if($(this).width() <= 768) {
            var classAdd = "";
            if($(this).width() < 464) {
                classAdd = "footer-space"
            } else {
                classAdd = "footer-space-small";
            }
            if ($(this).scrollTop() + $(this).height() > $(document).height() - 30) {
                $('.fb-message .box-chat, #chat-box, #back-top').addClass(classAdd);
                $('.fb-message .chat-icon').addClass(classAdd);
                $('.hotline-button.blog-page').addClass(classAdd);
                $('.hotline').addClass(classAdd);
            } else {
                $('.fb-message .box-chat, #chat-box, #back-top').removeClass(classAdd);
                $('.fb-message .chat-icon').removeClass(classAdd);
                $('.hotline-button.blog-page').removeClass(classAdd);
                $('.hotline').removeClass(classAdd);
            }
        }
    });

});

function playVideo(titleText) {
    $('.hidden-title').val(titleText);
    console.log($('.hidden-title').val());
}

function openModalVideo(id, link) {
    loadMoreFlag = false;
//    $('.related-video').css({'display': 'none'});

    $.ajax({
        type:"POST",
        url: ajax_url,
        data: {
            "action": "getRecommendVideo",
            "videoId": id
        },
        success:function(results){
            $('.recommend-video-blogs').html(results);
            $('.recommend-video-blogs').css({'display': 'block'});
            showModal('modal-video-blogs',true);

            window.history.pushState("", "", link);

            var windowHeight = $(window).height();
            var headerModalHeight = $('.modal-header').outerHeight();
            var padding = 40
            var videoContentHeight = windowHeight - padding - headerModalHeight - 50;
//            $('.related-video').height(videoContentHeight);
            $( ".modal.video-modal .modal-body" ).animate({ scrollTop: 0 }, 200);
            $('.modal.video-modal .modal-body').css({'overflow-y': 'hidden'});
            setTimeout(function() {
                $('#page-loader.video').css({'display': 'none'});

                $('.modal.video-modal .modal-body').css({'overflow-y': 'auto'});
//        $('.related-video').css({'display': 'block'});
            }, 2000);
        }
    });

}

$(window).on('load', function () {
    $('#page-loader').fadeOut('fast', function () {
        $(this).remove();
    });

    if(window.location.hash) {
        //Get hashtag in URL
        var getHash = window.location.hash.substring(1);
        //Do the scroll function to the desired section
        autoScroll(getHash,true);
    }
});

function autoScroll(name,animated){
    var scrollTarget = $("#" + name).offset().top;
    var navHeight = 70;
    var windowWidth = $(window).width();
    if( windowWidth >= 750 && windowWidth <= 1180 ) {
        navHeight = 120;
    }
    var scrollTop = scrollTarget - (navHeight - 1);
    if(animated){
        $('html, body').animate({scrollTop: scrollTop});
    }
    else{
        $('html, body').scrollTop(scrollTop);
    }
}

// $(document).bind('touchmove', function (e) {
//         e.preventDefault();
//     }
// );
var flagSwipe = false;
var payment = "";
var regCapchaId = "";
var banksInfo = [
    {
        "name": "Vietcombank",
        "username": "Le Huy",
        "number": "0181000544663",
        "branch": "Vietcombank TP HCM"
    },
    {
        "name": "Agribank",
        "username": "Nguyá»…n VÄƒn A",
        "number": "1234 5678 9012",
        "branch": "BĂ¬nh Tháº¡nh"
    },
    {
        "name": "Sacombank",
        "username": "Nguyá»…n VÄƒn S",
        "number": "1234 5678 9012",
        "branch": "BĂ¬nh Tháº¡nh"
    }
];
var loadMoreFlag = false;
var isSuggestion = false;
$(document).ready(function() {
    $('div#chat-box').css({"display": "block"});
    $('.cross').css({"display": "block"});
    var bgHeight = $('.about-us-training .content').outerHeight();
    $('.about-us-training .background').css({"min-height": bgHeight});
    var featuredItemHeight = $('.featured-video-item').outerHeight();
    var titleVideo = $('.video-type').outerHeight();
    $('.featured-video').css({'height': featuredItemHeight + titleVideo + 35});
    $('#register_form button[type="submit"]').click(function (event) {
        event.preventDefault();
        var idArray = [ 'reg_name', 'reg_email', 'reg_class_code', 'reg_number', 'reg_reference'];
        var idType  = [ 'text', 'email', 'text', 'number', 'text' ];
        var isValid = true;
        for( var i = 0; i < idArray.length; i++ ) {
            if( !validate(idType[i], idArray[i]) ) {
                $('#' + idArray[i]).addClass('invalid');
                isValid = false;
            } else {
                if (idArray[i] == 'reg_email') {
                    if (!isSuggestion) {
                        $('#' + idArray[i]).removeClass('invalid');
                    } else {
                        isValid = false;
                    }
                } else {
                    $('#' + idArray[i]).removeClass('invalid');
                }

            }
        }

        var resCaptcha = grecaptcha.getResponse(regCapchaId);
        if( resCaptcha == "" || resCaptcha == undefined || resCaptcha.length == 0 ) {
            $('#tab-reg-information .captcha p.required').removeClass('hidden');
            isValid = false;
        } else {
            $('#tab-reg-information .captcha p.required').addClass('hidden');
        }
        if(isValid) {
            $('#modal-join-class a[href="#tab-reg-payment"]').attr('data-toggle','tab');
            $('#modal-join-class a[href="#tab-reg-payment"]').parent().removeClass('disabled');
            $('#modal-join-class a[href="#tab-reg-payment"]').click();
        }
    });

    var domains = ['hotmail.com', 'gmail.com', 'aol.com'];
    var topLevelDomains = ["com", "net", "org"];
    $('#reg_email').on('blur', function() {
        $(this).mailcheck({
            domains: domains,                       // optional
            topLevelDomains: topLevelDomains,       // optional
            suggested: function(element, suggestion) {
                console.log(suggestion.full);
                $('#suggestion').html("Email cá»§a báº¡n cĂ³ pháº£i lĂ  <b><i>" + suggestion.full + "</b></i>?");
                $('#reg_email').addClass('invalid');
                isSuggestion = true;
            },
            empty: function(element) {
                console.log('empty');
                $('#suggestion').html("");
                $('#reg_email').removeClass('invalid');
                isSuggestion = false;
//                    $('#suggestion').html('No Suggestions :(');
            }
        });
    });
    $('#ebanking').click(function (event) {
        $('#direct').prop('checked', false);
        if($('#ebanking').prop('checked') == true) {
            $('#direct-info').hide(500);
            $('#bank-info').show(500);
            payment = "ebanking";
        } else {
            $('#bank-info').hide(500);
            payment = "";
        }
    });
    $('#direct').click(function (event) {
        $('#ebanking').prop('checked', false);
        if($('#direct').prop('checked') == true) {
            $('#bank-info').hide(500);
            $('#direct-info').show(500);
            payment = "direct";
        } else {
            $('#direct-info').hide(500);
            payment = "";
        }
    });
    loadBankInfo(0);
    $('#bank-info button[type="submit"]').click(function () {
        event.preventDefault();
        $('#modal-join-class a[href="#tab-reg-confirmation"]').parent().removeClass('disabled');
        $('#modal-join-class a[href="#tab-reg-confirmation"]').click();
        displayResult();
    });
    $('#direct-info button[type="submit"]').click(function (event) {
        event.preventDefault();
        $('#modal-join-class a[href="#tab-reg-confirmation"]').parent().removeClass('disabled');
        $('#modal-join-class a[href="#tab-reg-confirmation"]').click();
        displayResult();
    });
    $('#tab-reg-confirmation button[type="submit"]').click(function(event) {
        event.preventDefault();
        sendRegisterInfo();
    });
    $('select#reg_job').on('change', function() {
        if ($(this).val() == "KhĂ¡c") {
            $('.wizard .register-school').css({'display': 'none'});
        } else {
            $('.wizard .register-school').css({'display': 'block'});
            $('#reg_school').val('');
        }
    });

    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();
    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var $target = $(e.target);
        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $('.promote_condition').click(function(event) {
        showModal('conditional-modal', true);
    });

    $('#contact .contact-form .wpcf7').on('wpcf7spam', function(event){
        endSpinner();
        ga('send', 'event', 'Contact', 'Submit Spam');
    });

    $('#contact .contact-form .wpcf7').on('wpcf7invalid', function(event){
        endSpinner();
        ga('send', 'event', 'Contact', 'Submit Fail');
    });
    $('#contact .contact-form .wpcf7').on('wpcf7mailsent ', function(event){
        endSpinner();
        ga('send', 'event', 'Contact', 'Submit Success');
    });
    $('#contact .contact-form .wpcf7').on('wpcf7mailfailed', function(event){
        endSpinner();
        ga('send', 'event', 'Contact', 'Submit Success but failed to send mail');
        logMailError();
    });

    $('#introduction .bxslider').bxSlider({
        controls: true,
        auto: true,
        autoDelay: 5000,
        onSlideBefore: function () {
            flagSwipe = true;
        },
        onSlideAfter: function() {
            setTimeout(function() {
                flagSwipe = false;
            }, 1000)

        }
    });

    $('#modal-join-class').on('hidden.bs.modal', function () {
        grecaptcha.reset(regCapchaId);
    });

//    $('.blog-listing .bxslider-video').bxSlider({
//        slideWidth: 1000,
//        minSlides: 1,
//        maxSlides: 10,
//        slideMargin: 0,
//        moveSlides: 1,
//        touchEnabled: false,
//        pager: false
//    });
    $('#modal-video-blogs').on('hidden.bs.modal', function () {
        $('#modal-video-blogs .video-content iframe').attr('src', '');
        $('.modal.video-modal .modal-body').css({'overflow-y': 'hidden'});
        loadMoreFlag = false;
        var pathName = window.location.pathname;
        var protocol = window.location.protocol;
        var host = window.location.host;
        var url = protocol + "//" + host + "/video";
        window.history.pushState("", "", url);

    });

    $('#modal-video-blogs.modal-video-fake').on('hidden.bs.modal', function () {
        var pathName = window.location.pathname;
        var protocol = window.location.protocol;
        var host = window.location.host;
        var url = protocol + "//" + host + "/video";
        window.location = url;
    });

    $('.view-more-video').click(function(e) {
        console.log($('.featured-video')[0]);
        var height = $('.featured-video')[0].scrollHeight;
        e.stopPropagation();
        $('.featured-video').animate({
            'height': height
        });
        $('.view-more-video').css({"display": "none"});
    });
    $("input")
        .on("blur", function(evt) {
            $('.modal-open').css({"display": "block"});
        })
        .on("focus", function(evt) {
        });

    // Multilanguage menu
    var selected = $('.multilanguage .current-lang img').attr('src');
    $('.lang-chose img').attr('src', selected);

    $('.widget_polylang').css('display', 'none');

    $('.lang-chose').click(function(event) {
        $('.multilanguage .widget_polylang').slideToggle(500);
        event.preventDefault();
        return false;
    });

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("multilanguage"))
            $(".multilanguage .widget_polylang").slideUp(500);
    });

    var useragent = navigator.userAgent; // cache the userAgent info
    var iPhone = (useragent.match(/(iPad|iPhone|iPod)/g));

    $('.facebook-mobile-only').click(function() {
        var scheme;
        if (iPhone) {
            scheme = "fb://page/?id=" + $(this).data('id');
            setTimeout(function(){
                window.location = 'https://www.facebook.com/laptrinhvienio/';
            }, 1000);
            window.location = scheme;
        } else {
            scheme = "fb://page/" + $(this).data('id');
            setTimeout(function(){
                window.location = 'https://www.facebook.com/laptrinhvienio/';
            }, 1000);
            window.location = scheme;
        }
    });

    $(window).resize(function() {
        var titleVideo = $('.video-type').outerHeight();
        var bgHeight = $('.about-us-training .content').outerHeight();
        $('.about-us-training .background').css({"min-height": bgHeight});
        var featuredItemHeight = $('.featured-video-item').outerHeight();
        $('.featured-video').css({'height': featuredItemHeight + titleVideo + 35});
    });
});

function scrollToDownloadBtn() {
    $('html, body').animate({
        scrollTop: $(".download-btn").offset().top - 150
    }, 2000);
}

function scrollToReferenceList() {
    $('html, body').animate({
        scrollTop: $(".reference-text").offset().top - 150
    }, 2000);
}

function goToPromotion(url) {
    if (!flagSwipe) {
        window.location.href = url;
    }
}

function shareBlog(url, image, title) {
    $("meta[property='og\\:image']").attr("content", image);
    $("meta[property='og\\:title']").attr("content", title);
    var facebookLink = encodeURI("http://www.facebook.com/sharer.php?u=" + url);
    console.log(facebookLink);
    window.open(facebookLink, '_blank');
}

function shareBlogVideo(image, title) {
    var url = window.location.href;
    $("meta[property='og\\:image']").attr("content", image);
    $("meta[property='og\\:title']").attr("content", title);
    var facebookLink = encodeURI("http://www.facebook.com/sharer.php?u=" + url);
    setTimeout(function() {
        window.open(facebookLink, '_blank');
    }, 1000);
}

function viewMoreDecs() {
    loadMoreFlag = !loadMoreFlag;
    if (loadMoreFlag) {
        var height = $('.video-desc')[0].scrollHeight;
        $('.video-desc').animate({
            'height': height
        });
        $('.view-more-desc .text').text('áº¨n bá»›t');
    } else {
        $('.video-desc').animate({
            'height': 100
        });
        $('.view-more-desc .text').text('Xem thĂªm');
    }
}

function onTouchLogo() {
    $('.flip-container.hover').removeClass('hover');
    this.classList.toggle('hover');
}


function validate(type, id) {
    switch (type) {
        case 'email':
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test($('#' + id).val());
            break;
        case 'phoneNumber':
            if( $('#' + id).val().trim() == '' )
                return false;
            return !isNaN($('#' + id).val());
            break;
        default:
            var data = $('#' + id).val();
            if( data.trim() == '' )
                return false;
            else
                return true;
    }
}

function displayResult() {
    var html = '<h3 class="title">' + translatedText.checkInform + ': </h3>' +
        '<p>- ' + translatedText.fullName + ': @@NAME@@</p>' +
        '<p>- Email: @@EMAIL@@</p>' +
        '<p>- ' + translatedText.classCode + ': @@CLASSCODE@@</p>' +
        '<p>- ' + translatedText.studyTime + ': @@TIME@@</p>' +
        '<p>- ' + translatedText.phoneNumber + ': @@PHONE@@</p>' +
        '<p>- ' + translatedText.infoFrom + ': @@INFERENCE@@</p>' +
        '<p>- ' + translatedText.work + ': @@JOB@@</p>';
        if ($('#reg_job').val() !== 'KhĂ¡c') {
            html += '<p>- ' + translatedText.school + ': @@SCHOOL@@</p>';
        }
        html += '<p>- ' + translatedText.note + ': @@MESSAGE@@</p>' +
        '<p>- ' + translatedText.payment + ': @@PAYMENT@@</p>';
    html = html.replace('@@NAME@@', $('#reg_name').val());
    html = html.replace('@@EMAIL@@', $('#reg_email').val());
    html = html.replace('@@CLASSCODE@@', $('#reg_class_code').val());
    html = html.replace('@@PHONE@@', $('#reg_number').val());
    html = html.replace('@@INFERENCE@@', $('#reg_reference').val());
    html = html.replace('@@MESSAGE@@', $('#reg_message').val());
    html = html.replace('@@TIME@@', $('#reg_time').val());
    html = html.replace('@@PAYMENT@@', payment == 'direct' ? translatedText.direct : translatedText.byBank);
    html = html.replace('@@JOB@@', $('#reg_job').val());
    html = html.replace('@@SCHOOL@@', $('#reg_school').val());

    $('#tab-reg-confirmation .result-info').empty();
    $('#tab-reg-confirmation .result-info').html(html);
    $('#tab-reg-confirmation .result').empty();
}

function sendRegisterInfo() {
    $('#tab-reg-confirmation button.btn-default').html('<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>');
    var data = {
        '_wpcf7': $('#tab-reg-confirmation input[name="_wpcf7"]').val(),
        '_wpcf7_version': $('#tab-reg-confirmation input[name="_wpcf7_version"]').val(),
        '_wpcf7_locale': $('#tab-reg-confirmation input[name="_wpcf7_locale"]').val(),
        '_wpcf7_unit_tag': $('#tab-reg-confirmation input[name="_wpcf7_unit_tag"]').val(),
        '_wpcf7_is_ajax_call': 1,
        '_wpnonce': $('#tab-reg-confirmation input[name="_wpnonce"]').val(),
        'reg-name': $('#reg_name').val(),
        'reg-email': $('#reg_email').val(),
        'reg-class-code': $('#reg_class_code').val(),
        'reg-phone': $('#reg_number').val(),
        'reg-reference': $('#reg_reference').val(),
        'reg-message': $('#reg_message').val(),
        'reg-payment': payment == 'direct' ? translatedText.direct : translatedText.byBank,
        'reg-time': $('#reg_time').val(),
        'reg-job': $('#reg_job').val(),
        'reg-school': $('#reg_school').val()
    };
    if ($('#reg_job').val() == 'KhĂ¡c') {
        delete data['reg-school'];
    }

    $.ajax({
        type: "POST",
        url: "#",
        data: data,
        dataType: 'json',
        success: function (res) {
            $('#tab-reg-confirmation button.btn-default').html(translatedText.confirm);
            $('#tab-reg-result .result').empty();
            if( res.mailSent ) {
                $('#tab-reg-result .result').html('<p>' + translatedText.successRegister + '</p>');
                $('.result-cover .result').removeClass('error');
                $('.result-cover .result').addClass('success');
                ga('send', 'event', 'Register', 'Submit Success');
            } else {
                if(res.invalids) {
                    $('#tab-reg-result .result').html('<p>' + translatedText.failRegister + '</p>');
                    $('.result-cover .result').removeClass('success');
                    $('.result-cover .result').addClass('error');
                    ga('send', 'event', 'Register', 'Submit Fail');
                } else {
                    /* Display successfully although failed to send mail*/
                    $('#tab-reg-result .result').html('<p>' + translatedText.successRegister + '</p>');
                    $('.result-cover .result').removeClass('error');
                    $('.result-cover .result').addClass('success');
                    ga('send', 'event', 'Register', 'Submit Success but failed to send mail');

                    logMailError();
                }
            }
            $('#modal-join-class a[href="#tab-reg-result"]').parent().removeClass('disabled');
            $('#modal-join-class a[href="#tab-reg-result"]').click();
        }
    });
}

function logMailError() {
    $.ajax({
        type: "POST",
        url: ajax_url,
        data: {
            "action": "email_error"
        },
        success: function (results) {

        },
        error: function (errors) {

        }
    });
}

function openRegisterModal(classCode, timeString) {
    ga('send', 'event', 'Register', 'Register button click');
    $('#modal-join-class .nav-tabs li').addClass('disabled');
    $('#modal-join-class .nav-tabs li:nth-child(1)').removeClass('disabled');
    $('#modal-join-class .nav-tabs li:nth-child(1) a').click();
    if( regCapchaId === "") {
        regCapchaId = grecaptcha.render('reg-captcha', {
            'sitekey' : '6LdRlCEUAAAAAGu2HyqQFowbFQWKQnqHZPP6DsPj'
        });
    }
    $('#reg_time').empty();
    var option = timeString.split('@@');
    var html = "";
    for (var i = 0; i < option.length-1; i++) {
        html += "<option value='" + option[i] + "'>" + option[i] + "</option>";
    }
    $('#reg_time').html(html);
    $('#reg_class_code').val(classCode);
    $('#modal-join-class .invalid').removeClass("invalid");
    $('#tab-reg-information .captcha p.required').addClass('hidden');

    $('#reg_name').val("");
    $('#reg_email').val("");
    $('#reg_number').val("");
    $('#reg_message').val("");
    $('#reg_school').val("");
    showModal('modal-join-class',true);
}

function loadBankInfo(index) {
    $('.banks .bank-logo').removeClass('chosen');
    $(this).addClass('chosen');
    $('#bank-name').html(banksInfo[index].name);
    $('#bank-username').html(banksInfo[index].username);
    $('#bank-number').html(banksInfo[index].number);
    $('#bank-branch').html(banksInfo[index].branch);
    $('#bank-info .bank-logo:nth-child(' + (index  + 1) + ')').addClass('chosen');
}

function openDetailProgram(id) {
    $('#tab1-' + id).click();
    showModal('modal-detail-class-' + id, true);
}

function showHotline() {
    $('.hotline').toggleClass('right');
}

function submitSubscribe() {
    if(validateData('subscribe-email')) {
        $('#subscribe div.input-group button').html('<i class="fa fa-spinner fa-pulse fa-1x fa-fw"></i>');
//        $('#subscribe .result').empty();
        var data = {
            '_wpcf7': $('#subscribe input[name="_wpcf7"]').val(),
            '_wpcf7_version': $('#subscribe input[name="_wpcf7_version"]').val(),
            '_wpcf7_locale': $('#subscribe input[name="_wpcf7_locale"]').val(),
            '_wpcf7_unit_tag': $('#subscribe input[name="_wpcf7_unit_tag"]').val(),
            '_wpcf7_is_ajax_call': 1,
            '_wpnonce': $('#subscribe input[name="_wpnonce"]').val(),
            'subscribe-email': $('#subscribe-email').val()
        };

        $.ajax({
            type: "POST",
            url: "#",
            data: data,
            dataType: 'json',
            success: function (res) {
                $('#subscribe div.input-group button').html('ÄÄƒng kĂ½');
                if( res.mailSent ) {
                    $('#subscribe .result .subs-error').css({'display': 'none'});
                    $('#subscribe .result .subs-success').text(translatedText.successRegister)
                    $('#subscribe .result .subs-success').css({'display': 'block'});
                    ga('send', 'event', 'Subscribe', 'Subscribe Success');
                } else {
                    $('#subscribe .result .subs-success').css({'display': 'none'});
                    $('#subscribe .result .subs-error').text(translatedText.failRegister)
                    $('#subscribe .result .subs-error').css({'display': 'block'});
                    ga('send', 'event', 'Subscribe', 'Subscribe Fail');
                }
            }
        });
    } else {
        $('#subscribe .result .subs-success').css({'display': 'none'});
        $('#subscribe .result .subs-error').text(translatedText.emailRequired)
        $('#subscribe .result .subs-error').css({'display': 'block'});
    }
}

function checkIfEmailInString(text) {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(text);
}

function validateData(id) {
    var data = $('#' + id).val();
    var res = checkIfEmailInString(data);
    console.log(res);
    return res;
}

function wait() {
    $('#contact .contact-form .wpcf7 button').html('<i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>');
}

function endSpinner() {
    $('#contact .contact-form .wpcf7 button').html('<i class="fa fa-send-o"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + translatedText.send);
}

function viewVideo() {
    $('.about-us-intro a, .about-us-intro .background-image').hide();
    var html = '<iframe width="540" height="358" src="https://www.youtube.com/embed/1kK5n0YahPA?autoplay=1" frameborder="0" allowfullscreen></iframe>';
    $('.about-us-intro').append(html);
}

/* --- Blogs --- */
$(window).ready(function() {
    var leftWidth = $('#fixed-position-left').parent().width();
    $('#fixed-position-left').css({
        "position": "fixed",
        "width": leftWidth + "px"
    });

    var contentBlogHeight = $(".blog-listing").height();
    var promoHeight = $("#fixed-position-right").height();
    var rightWidth = $('#fixed-position-right').parent().width();
    $('#fixed-position-right').css({
        "position": "fixed",
        "width": rightWidth + "px"
    });
    if (contentBlogHeight < promoHeight) {
        $("#fixed-position-right").css({"position": "relative"});
    }
});

$(window).resize(function() {
    var leftWidth = $('#fixed-position-left').parent().width();
    $('#fixed-position-left').css({
        "position": "fixed",
        "width": leftWidth + "px"
    });

    var rightWidth = $('#fixed-position-right').parent().width();
    $('#fixed-position-right').css({
        "position": "fixed",
        "width": rightWidth + "px"
    });
});

function search(e, home_url) {
    if (e.keyCode == 13) {
        var searchText = $('#searchText').val();
        location.href = home_url + "/blogs?search=" + searchText;
    }
}

var firstTimeLoading = false;

window.onscroll = function() {
    if($('.teachers').length > 0) {
        if ($(document).scrollTop() + ($(window).height() / 1.3) >= $('.teachers').offset().top && $(document).scrollTop() < $('.teachers').offset().top + $('.teachers').height()) {
            $('.teachers .hidden-y').addClass('active');
        }

        if ($(document).scrollTop() + ($(window).height() / 4.25) >= $('.teachers').offset().top + $('.teachers').height() || $(document).scrollTop() + ($(window).height() / 1.3) < $('.teachers').offset().top) {
            $('.teachers .hidden-y').removeClass('active');
        }
    }

    /// Auto rotate logo first time
    if($('.about-us').length > 0) {
        if ($(document).scrollTop() + ($(window).height() / 3) >= $('.about-us').offset().top && $(document).scrollTop() < $('.about-us').offset().top + $('.about-us').height()) {
            if (!firstTimeLoading) {
                $('.flip-container').each(function (index) {
                    var timer = (index + 1) * 100;
                    setTimeout(function () {
                        var cacheTimer = timer;
                        $($('.flip-container')[index]).addClass('hover');
                        setTimeout(function () {
                            $($('.flip-container')[index]).removeClass('hover');
                        }, cacheTimer + 50);
                    }, timer);
                });
                firstTimeLoading = true;
            }
        }
    }
    /// End auto rotate logo first time
    if($('.about-us').length > 0) {
        if ($(document).scrollTop() + ($(window).height() / 1.3) >= $('.about-us').offset().top && $(document).scrollTop() < $('.about-us').offset().top + $('.about-us').height()) {
            $('.about-us .hidden-y').addClass('active');
            $('.about-us .container-hidden.logo-block').removeClass("container-hidden");
            $('.about-us .background').addClass('animate');
        }

        if ($(document).scrollTop() + ($(window).height() / 4.25) >= $('.about-us').offset().top + $('.about-us').height() || $(document).scrollTop() + ($(window).height() / 1.3) < $('.about-us').offset().top) {
            $('.about-us .hidden-y').removeClass('active');
            $('.about-us .container-hidden.logo-block').addClass("container-hidden");
            $('.about-us .background').removeClass('animate');
        }
    }

    if($('.about-us-training').length > 0) {
        if ($(document).scrollTop() + ($(window).height() / 1.3) >= $('.about-us-training').offset().top && $(document).scrollTop() < $('.about-us-training').offset().top + $('.about-us-training').height()) {
            $('.about-us-training .hidden-y').addClass('active');
            $('.about-us-training .background').addClass('animate');
        }

        if ($(document).scrollTop() + ($(window).height() / 4.25) >= $('.about-us-training').offset().top + $('.about-us-training').height() || $(document).scrollTop() + ($(window).height() / 1.3) < $('.about-us-training').offset().top) {
            $('.about-us-training .hidden-y').removeClass('active');
            $('.about-us-training .background').removeClass('animate');
            $('.about-us-training .background .logo-white').removeClass('animate');
        }
        // for laptrinhvien logo
        if ($(document).scrollTop() + ($(window).height() / 2) >= $('.about-us-training').offset().top && $(document).scrollTop() < $('.about-us-training').offset().top + $('.about-us-training').height()) {
            $('.about-us-training .background .logo-white').addClass('animate');
        }
    }
};

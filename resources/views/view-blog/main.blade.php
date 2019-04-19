<!DOCTYPE html>
<html lang="en">

<head>
    <title>Blogs - Nhóm 04</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/bower_components/bootstrap/dist/css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/bower_components/font-awesome/css/font-awesome.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/jtc.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/style.css')}}">
</head>

<body data-rsssl=1>
    @include('view-blog.includes.topbar') @include('view-blog.includes.header')
    <section class="content">
        <div class="container blog-content">
            <div class="row">
                <div class="col-md-3 col-sm-3 hidden-xs">
                    @include('view-blog.includes.menu')
                </div>
                {{-- Main Content --}} @yield('Main_content') {{-- End Main Content --}}
                <div class="col-md-3 hidden-sm">
                    @include('view-blog.includes.widget')
                </div>
            </div>
        </div>
        {{-- @include('view-blog.includes.footer') --}}
    </section>
     <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/bower_components/jquery/dist/jquery.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/bower_components/bootstrap/dist/js/bootstrap.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/util.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/jtc.js')}}"></script>

    <script>
        $(document).ready(function() {
            $('div#chat-box').css({
                "display": "none"
            });
            $('.fb-message').addClass("blog-page");
            $('#chat-box').addClass("blog-page");
        });
      

        function scrollToTop() {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
        }
        $(window).scroll(function() {
            $('#fixed-position-right').scrollTop($(window).scrollTop());
            if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10 - 347) {
                var contentBlogHeight = $(".blog-listing").height();
                var promoHeight = $("#fixed-position-right").height();
                if (contentBlogHeight >= promoHeight) {
                    $('.blank-promotion').css({
                        'display': 'block'
                    });
                }
            } else {
                $('.blank-promotion').css({
                    'display': 'none'
                });
            }
           
        });
    </script>
    <a id="back-top" onclick="scrollToTop()" class="back-to-top blog-page page-scroll" title="back to Top">
        <i class="fa fa-caret-up"></i>
    </a>
</body>
</html>
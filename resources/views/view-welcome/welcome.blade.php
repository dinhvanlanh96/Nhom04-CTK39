<!DOCTYPE html>
<html lang="en">

<head>
    <title>LẬP TRÌNH VIÊN  </title>
    <meta charset="UTF-8">
    <link href="{{asset('assets/wp-content/themes/Training/asset/img/favicon.ico')}}" rel="shortcut icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="keywords" content="đào tạo lập trình viên, dạy lập trình viên, lập trình viên, trung tâm, trung tâm đào tạo, c++, angularjs, nodejs, php, phalcon, mean, mean stack, expressjs, expressjs, front-end, frontend, backend, back-end, server side, client side, dev ops, full stack , developer, software" />
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/bower_components/bootstrap/dist/css/bootstrap.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/bower_components/font-awesome/css/font-awesome.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/animate.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/bxslider/dist/jquery.bxslider.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/magnific-popup/magnific-popup.css')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/lib/jtc.css?v=1.1.0')}}">
    <link rel="stylesheet" href="{{asset('assets/wp-content/themes/Training/style.css?v=1.1.0')}}">
</head>
<body data-rsssl=1>
    <div id="page-loader">
        <div class="loader-icon fa fa-spin colored-border"></div>
    </div>
    <a id="back-top" class="back-to-top page-scroll" href="#introduction" title="back to Top">
        <i class="fa fa-caret-up"></i>
    </a>
    @include('view-welcome.include.header')
   <!-- ABOUT US -- START -->
        @include('view-welcome.pages.about')
        <!-- ABOUT US LAPTRINHVIENIO -- END -->
        <!-- OUR COURSE 2 -- START -->
        @include('view-welcome.pages.course')
        <!-- OUR COURSE 2 -- END -->
        <!-- TEACHERS -- START -->
        @include('view-welcome.pages.teachers')
        <!-- TEACHERS -- END -->
        @include('view-welcome.pages.lichkhaigian')
        <!-- TESTIMONIAL -- START -->
        @include('view-welcome.pages.testimonial')
        <!-- TESTIMONIAL -- END -->
        <!-- NEWS -- START -->
        @include('view-welcome.pages.news')
        <!-- NEWS -- END -->
        <!-- ==============================================================================  -->
        <!-- PRIVATE CLASS -- START -->
        @include('view-welcome.pages.privateclass')
        <!-- PRIVATE CLASS -- END -->
        <!-- ==============================================================================  -->
        <!-- PARTNER -- START -->
        @include('view-welcome.pages.partner')
        <!-- PARTNER -- END -->
        <!-- CONTACT -- START -->
        @include('view-welcome.pages.contact')
        <!-- CONTACT -- END -->
    @include('view-welcome.include.footer')
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/bower_components/jquery/dist/jquery.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/bower_components/bootstrap/dist/js/bootstrap.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/bower_components/mailcheck/src/mailcheck.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/bxslider/dist/jquery.bxslider.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/magnific-popup/jquery.magnific-popup.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/modernizr-custom-jtc.js')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/util.js?v=1.1.0')}}"></script>
    <script type="text/javascript" src="{{asset('assets/wp-content/themes/Training/lib/jtc.js?v=1.1.0')}}"></script>
    @yield('script')
</body>
</html>

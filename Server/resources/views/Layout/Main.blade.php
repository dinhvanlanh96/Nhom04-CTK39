
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta charset="utf-8" />
		<title>QUẢN LÝ TRỌ</title>
	<link rel="shortcut icon" href="{{asset('Manage/assets/images/icon.png')}}">
		<meta name="description" content="Common form elements and layouts" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @include('Block.Style')
	</head>
	<body class="no-skin" onload="app_menu('welcome')">
		@include('Block.Header')
		<div class="main-container ace-save-state" id="main-container">
			<script type="text/javascript">
				try{ace.settings.loadState('main-container')}catch(e){}
			</script>
		@include('Block.Sidebar')
			<div class="main-content">
				<div class="main-content-inner">

				</div>
			</div><!-- /.main-content -->
			@include('Block.Footer')
		</div>
    <!-- /.main-container -->
     @include('Block.Scripts')
    
	</body>
</html>

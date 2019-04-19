<div id="sidebar" class="sidebar                  responsive                    ace-save-state sidebar-fixed">
  <script type="text/javascript">
    try{ace.settings.loadState('sidebar')}catch(e){}
  </script>
  <div class="sidebar-shortcuts" id="sidebar-shortcuts">
    <div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
      <button class="btn btn-success">
        <i class="ace-icon fa fa-signal"></i>
      </button>

      <button class="btn btn-info">
        <i class="ace-icon fa fa-pencil"></i>
      </button>

      <button class="btn btn-warning">
        <i class="ace-icon fa fa-users"></i>
      </button>

      <button class="btn btn-danger">
        <i class="ace-icon fa fa-cogs"></i>
      </button>
    </div>

    <div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
      <span class="btn btn-success"></span>

      <span class="btn btn-info"></span>

      <span class="btn btn-warning"></span>

      <span class="btn btn-danger"></span>
    </div>
  </div><!-- /.sidebar-shortcuts -->

  <ul class="nav nav-list">
    <li class="Dashboard">
      <a onclick="app_menu('Dashboards')" href="#">
        <i class="menu-icon fa fa-tachometer"></i>
        <span class="menu-text"> Tổng quan </span>
      </a>

      <b class="arrow"></b>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-home"></i>
        <span class="menu-text">
          Thời Khóa Biểu
        </span>
        <b class="arrow fa fa-angle-down"></b>
      </a>
    </li>
    <li class="">
      <a  href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa fa-users" aria-hidden="true"></i>
        <span class="menu-text">
          Học Viên
        </span>
        <b class="arrow fa fa-angle-down"></b>
      </a>
      <b class="arrow"></b>
      <ul class="submenu">
        <li class="">
          <a  onclick="app_menu('error-500')" href="#" class="dropdown-toggle">
            <i class="menu-icon fa fa-caret-right"></i> Học Viên</a>
          <b class="arrow"></b>
        </li>
        <li class="">
          <a  onclick="app_menu('error-500')" href="#" class="dropdown-toggle">
            <i class="menu-icon fa fa-caret-right"></i> Thi Đầu Vào</a>
          <b class="arrow"></b>
        </li>
        <li class="">
          <a  onclick="app_menu('error-500')" href="#" class="dropdown-toggle">
            <i class="menu-icon fa fa-caret-right"></i> Tư Vấn</a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#">
        <i class="menu-icon fa fa-diamond" aria-hidden="true"></i>
        <span class="menu-text">
          Khóa Học
        </span>
      </a>
      <b class="arrow"></b>
    </li>
    <li class="">
      <a onclick="app_menu('error-500')" href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-graduation-cap"></i>
        <span class="menu-text"> Lớp Học</span>   
        <b class="arrow fa fa-angle-down"></b>
      </a>
      <b class="arrow"></b>
      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('error-500')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Chung
          </a>

          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-bullhorn"></i>
        <span class="menu-text"> Điểm Danh </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('error-500')" id="profile" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            SMS
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Phản hồi dịch vụ
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-money"></i>
        <span class="menu-text"> Thu Học Phi </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('Profiles')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Hô sơ cá nhân
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Cấu hình chung
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-user-circle-o"></i>
        <span class="menu-text"> Giáo Viên </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('Profiles')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Hô sơ cá nhân
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Cấu hình chung
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-server"></i>
        <span class="menu-text"> Thiết Bị </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('Profiles')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Hô sơ cá nhân
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Cấu hình chung
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa fa-cog"></i>
        <span class="menu-text"> Hệ thống </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('Profiles')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Hô sơ cá nhân
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Cấu hình chung
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="#" class="dropdown-toggle">
        <i class="menu-icon fa fa-fire"></i>
        <span class="menu-text"> Mở rộng </span>

        <b class="arrow fa fa-angle-down"></b>
      </a>

      <b class="arrow"></b>

      <ul class="submenu">
        <li class="">
          <a onclick="app_menu('error-500')" id="profile" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Tin khuyến mãi
          </a>

          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" id="profile"  href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            FAQ
          </a>
          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" href="#l">
            <i class="menu-icon fa fa-caret-right"></i>
            Hướng dẫn sử dụng
          </a>
          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Videos
          </a>
          <b class="arrow"></b>
        </li>
        <li class="">
          <a onclick="app_menu('error-500')" href="#">
            <i class="menu-icon fa fa-caret-right"></i>
            Liên hệ
          </a>
          <b class="arrow"></b>
        </li>
      </ul>
    </li>
    <li class="">
      <a href="gallery.html">
        <i class="menu-icon fa fa-power-off"></i>
        <span class="menu-text"> Đăng xuất </span>
      </a>

      <b class="arrow"></b>
    </li>
  </ul><!-- /.nav-list -->

  <div class="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
    <i id="sidebar-toggle-icon" class="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
  </div>
</div>

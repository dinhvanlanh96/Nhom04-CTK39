<script type="text/javascript" src="{{ asset('js/manage/ProfilesController.js')}}" ></script>
<div class="breadcrumbs ace-save-state" id="breadcrumbs">
  <ul class="breadcrumb">
    <li>
        <i class="ace-icon fa fa-home home-icon"></i>
        <a href="#">HỆ THỐNG</a>
    </li>
    <li class="active">HÔ SƠ CÁ NHÂN	</li>
  </ul><!-- /.breadcrumb -->
  <div class="nav-search" id="nav-search">
    <form class="form-search">
      <span class="input-icon">
        <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
        <i class="ace-icon fa fa-search nav-search-icon"></i>
      </span>
    </form>
  </div><!-- /.nav-search -->
</div>
<div class="page-content">
  <div id="user-profile-1" class="user-profile row">
      <div class="col-xs-12 col-sm-4 center">
          <div>
              <span class="profile-picture">
          <img id="avatar" class="editable img-responsive" alt="Alex's Avatar" src="{{asset('Manage/assets/images/avatars/profile-pic.jpg')}}" />
        </span>

              <div class="space-4"></div>

              <div class="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
                  <div class="inline position-relative">
                      <a href="#" class="user-title-label dropdown-toggle" data-toggle="dropdown">
                          <i class="ace-icon fa fa-circle light-green"></i> &nbsp;
                          <span class="white">Đinh Văn Lành</span>

                      </a>

                  </div>
              </div>
          </div>
          <div class="space-6"></div>
          <div class="profile-contact-info">
              <div class="profile-contact-links align-left">
                  <div class="profile-user-info profile-user-info-striped center">
                      <div class="profile-info-row">
                          <div class="profile-info-value">
                              <span class="editable red	">Họ Tên : Đinh Văn Lành</span>
                          </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-value">
                            <span class="editable yellow	">Mã GV : GV12022019</span>
                        </div>
                    </div>
                      <div class="profile-info-row">
                          <div class="profile-info-value">
                              <span class="editable blue">Ngày Sinh : 12/0/1996</span>
                          </div>
                      </div>
                      <div class="profile-info-row">
                        <div class="profile-info-value">
                            <span class="editable blue">Chức Vụ : Giản Viên PHP</span>
                        </div>
                    </div>
                      <div class="profile-info-row">
                          <div class="profile-info-value">
                            <span class="editable blue">Ngày Vào Làm : 12/0/1995</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="space-6"></div>
          </div>
      </div>
      <div class="col-xs-12 col-sm-8">
          <div class="row">
              <div class="col-xs-12">
                  <!-- PAGE CONTENT BEGINS -->
                  <div class="tabbable">
                      <ul class="nav nav-tabs padding-18 tab-size-bigger" id="myTab">
                          <li class="active">
                              <a data-toggle="tab" href="#faq-tab-1">	<i class="fa fa-user bigger-110"></i> Thông tin cá nhân	</a>
                          </li>
                          <li>
                              <a data-toggle="tab" href="#faq-tab-2">	<i class="fa fa-lock bigger-110"></i>	Đổi mật khẩu	</a>
                          </li>
                      </ul>
                      <div class="tab-content no-border padding-24">
                          <div id="faq-tab-1" class="tab-pane fade in active">

                              <div id="faq-list-1" class="panel-group accordion-style1 accordion-style2">

                                  <div class="profile-user-info profile-user-info-striped">
                                    <div class="profile-info-row">
                                        <div class="profile-info-name text-left"> Họ và tên  </div>
                                        <div class="profile-info-value">
                                          <div class="input-group">
                                                                            <input class="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy">
                                                                            <span class="input-group-addon">
                                                                              <i class="fa fa-user bigger-110"></i>
                                                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="profile-info-row">
                                          <div class="profile-info-name text-left"> Ngày sinh  </div>
                                          <div class="profile-info-value">
                                            <div class="input-group">
                                                                              <input class="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy">
                                                                              <span class="input-group-addon">
                                                                                <i class="fa fa-calendar bigger-110"></i>
                                                                              </span>
                                              </div>
                                          </div>
                                    </div>
                                    <div class="profile-info-row">
                                          <div class="profile-info-name text-left"> Giới tính  </div>
                                          <div class="profile-info-value">
                                              <div class="control-group">
                                                  <div class="col-md-5">
                                                    <div class="radio">
                                                    <label>
                                                    <input name="form-field-radio" type="radio" class="ace" checked>
                                                    <span class="lbl"> Nam</span>
                                                    </label>
                                                    <label>
                                                    <input name="form-field-radio" type="radio" class="ace">
                                                    <span class="lbl"> Nữ</span>
                                                    </label>
                                                    </div>
                                                  </div>
                                              </div>
                                          </div>
                                    </div>
                                    <div class="profile-info-row">
                                          <div class="profile-info-name text-left"> Địa chỉ  </div>
                                          <div class="profile-info-value">
                                            <div class="input-group">
                                                                              <input class="form-control date-picker" id="id-date-picker-1" type="text" data-date-format="dd-mm-yyyy">
                                                                              <span class="input-group-addon">
                                                                                <i class="fa fa-globe bigger-110"></i>
                                                                              </span>
                                              </div>
                                          </div>
                                    </div>
                                    <div class="profile-info-row">
                                          <div class="profile-info-name text-left"> Số điện thoại  </div>
                                          <div class="profile-info-value">
                                            <div class="input-group">
                                                  <input class="form-control input-mask-phone" type="text" id="form-field-mask-2">
                                                  <span class="input-group-addon">
                                                    <i class="ace-icon fa fa-phone"></i>
                                                  </span>
                                                </div>
                                          </div>
                                    </div>

                                  </div>
                                  <div class="space-4"></div>
                                  <div class="col-xs-12 col-sm-12 center">
                                      <button class="btn btn-success" id="update-Profiles" onclick=""><i class="ace-icon fa fa-refresh"></i>Cập nhập</button>
                                </div>
                              </div>
                          </div>
                          <div id="faq-tab-2" class="tab-pane fade">
                              <div id="faq-list-2" class="panel-group accordion-style1 accordion-style2">
                                <div class="profile-user-info profile-user-info-striped">
                                  <div class="profile-info-row">

                                      <div class="profile-info-value">
                                        <div class="input-group">
                                                                          <input class="form-control date-picker" id="id-date-picker-1" placeholder="Nhập mật khẩu hiên tại ... " type="text" data-date-format="dd-mm-yyyy">
                                                                          <span class="input-group-addon">
                                                                            <i class="fa 	fa-key bigger-110"></i>
                                                                          </span>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="profile-info-row">

                                        <div class="profile-info-value">
                                          <div class="input-group">
                                                                            <input class="form-control date-picker" id="id-date-picker-1" placeholder="Nhập mật khẩu mới ... " type="text" data-date-format="dd-mm-yyyy">
                                                                            <span class="input-group-addon">
                                                                              <i class="fa fa-lock bigger-110"></i>
                                                                            </span>
                                            </div>
                                        </div>
                                  </div>
                                  <div class="profile-info-row">

                                        <div class="profile-info-value">
                                          <div class="input-group">
                                                                            <input class="form-control date-picker" id="id-date-picker-1" placeholder="Nhập lại mật khẩu mới ... " type="text" data-date-format="dd-mm-yyyy">
                                                                            <span class="input-group-addon">
                                                                              <i class="fa fa-lock bigger-110"></i>
                                                                            </span>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                                <div class="space-4"></div>
                                <div class="col-xs-12 col-sm-12 center">
                                    <button class="btn btn-success" onclick="send('Success Message', 'success')"><i class="ace-icon fa fa-refresh icon-animated-bell"></i>Cập nhập</button>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  </div>
</div><!-- /.page-content -->
<script>
    var ProfilesController = new ProfilesController();
    ProfilesController.ProfilesMain();
</script>

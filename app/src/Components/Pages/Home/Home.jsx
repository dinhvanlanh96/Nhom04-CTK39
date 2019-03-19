import React, { Component } from 'react';
import Menu from '../../Includes/Menu';
import Widget from '../../Includes/Widget';
import {Link} from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <section className="content">
      <div className="container blog-content">
        <div className="row">
        <Menu/>
         <div className="col-md-6 col-sm-9 blog-listing">
            <div className="panel image-top clearfix">
              <a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-can-ban-c-khai-giang-ngay-18-03-2019/">
                <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/11/laptrinhvienio-khoa-hoc-lap-trinh-can-ban-va-cpp-khai-giang-ngay-10-12-2018.png")'}}>
                </div>
              </a>
              <div className="content flex-container flex-direction-column">
                <h3 className="title"><a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-can-ban-c-khai-giang-ngay-18-03-2019/">Khóa học Lập trình Căn bản &amp; C++ – Khai giảng ngày 18/03/2019</a></h3>
                <div className="row flex-container">
                  <div className="views col-sm-5 hidden-xs">
                    {/*                                                <span class="author">*/}{/*</span>*/}
                    <span className="time">
                      <i className="fa fa-clock-o" />
                      1 tháng trước              </span>
                  </div>
                  <div className="col-sm-7 category">
                    <a href="https://laptrinhvien.io/blogs?category=courses">
                      #Khoá học                  </a>
                  </div>
                </div>
                <div className="short-info">
                  <p>Nhằm cung cấp kiến thức về kỹ năng lập trình căn bản cho tất cả mọi người có đam mê và mong muốn tìm hiểu về Lập trình, đặc biệt là những bạn chuẩn bị bước vào năm 1 khoa CNTT, cũng như các bạn sinh viên muốn lấy lại căn bản kỹ thuật lập trình. Trung Tâm Đào Tạo Lập trình viên JANETO khai giảng <strong>Khóa học Lập trình căn bản &amp; C++</strong></p>
                </div>
                <div className="blog-sharing row">
                  <div className="col-md-9 blog-views">
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                      <div className="post-views post-5677 entry-meta">
                        <span className="post-views-count">305</span>
                      </div>              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                      href="https://laptrinhvien.io/khoa-hoc-lap-trinh-can-ban-c-khai-giang-ngay-18-03-2019/" />
                    </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                      0              </span>
                  </div>
                  <div className="col-md-3 blog-share-btn">
                    <a 
                     target="_blank">
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                    </a>
                  </div>
                </div>
                <div className="views visible-xs">
                  {/*                                            */}                        <div className="time">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    1 tháng trước          </div>
                </div>
              </div>
            </div>
            <div className="visible-sm visible-xs">
              <div className="panel only-promotion clearfix">
                <a href="https://laptrinhvien.io/cong-ty-janeto-lien-tuc-tuyen-dung-cac-vi-tri-tu-internship-toi-senior/">
                  <img className="promotion" src="https://laptrinhvien.io/wp-content/uploads/2018/09/laptrinhvienio-tin-tuyen-dung-cong-ty-janeto-dang-tuyen-dung-cac-vi-tri-tu-internship-toi-senior-thang-11-2018.png" />
                </a>
                <a  target="_blank">
                  <img className="sharing" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                </a>
              </div>                              </div>
            <div className="panel image-top clearfix">
              <a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-web-front-end-co-ban-khai-giang-ngay-25-03-2019/">
                <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/11/laptrinhvienio-khoa-hoc-lap-trinh-web-front-end-co-ban-khai-giang-ngay-10-12-2018.png")'}}>
                </div>
              </a>
              <div className="content flex-container flex-direction-column">
                <h3 className="title"><a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-web-front-end-co-ban-khai-giang-ngay-25-03-2019/">Khóa học Lập trình Web Front-End cơ bản – Khai giảng ngày 25/03/2019</a></h3>
                <div className="row flex-container">
                  <div className="views col-sm-5 hidden-xs">
                    {/*                                                <span class="author">*/}{/*</span>*/}
                    <span className="time">
                      <i className="fa fa-clock-o" />
                      1 tháng trước              </span>
                  </div>
                  <div className="col-sm-7 category">
                    <a href="https://laptrinhvien.io/blogs?category=courses">
                      #Khoá học                  </a>
                  </div>
                </div>
                <div className="short-info">
                  <p>HTML, CSS và Javascript là bộ 3 ngôn ngữ cần thiết cho mọi Lập trình viên Web Front-End. Dù bạn muốn xây dựng nên một trang web đơn giản hay phức tạp đều không thể thiếu chúng. Khóa học lập trình <strong>Web Front End cơ bản</strong> sẽ cung cấp cho bạn những kiến thức cơ bản, cần thiết nhất để bắt đầu trên con đường trở thành một lập trình viên web chuyên nghiệp.</p>
                </div>
                <div className="blog-sharing row">
                  <div className="col-md-9 blog-views">
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                      <div className="post-views post-5682 entry-meta">
                        <span className="post-views-count">349</span>
                      </div>              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                        </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                      0              </span>
                  </div>
                  <div className="col-md-3 blog-share-btn">
                    <a  target="_blank">
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                    </a>
                  </div>
                </div>
                <div className="views visible-xs">
                  {/*                                            */}                        <div className="time">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    1 tháng trước          </div>
                </div>
              </div>
            </div>
            <div className="panel image-top clearfix">
              <a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-angular-6-khai-giang-ngay-18-03-2019/">
                <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/11/laptrinhvienio-khoa-hoc-lap-trinh-web-front-end-nang-cao-voi-angular-6-khai-giang-ngay-10-12-2018.png")'}}>
                </div>
              </a>
              <div className="content flex-container flex-direction-column">
                <h3 className="title"><a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-angular-6-khai-giang-ngay-18-03-2019/">Khóa học Lập trình Angular 6 – Khai giảng ngày 18/03/2019</a></h3>
                <div className="row flex-container">
                  <div className="views col-sm-5 hidden-xs">
                    {/*                                                <span class="author">*/}{/*</span>*/}
                    <span className="time">
                      <i className="fa fa-clock-o" />
                      1 tháng trước              </span>
                  </div>
                  <div className="col-sm-7 category">
                    <a href="https://laptrinhvien.io/blogs?category=courses">
                      #Khoá học                  </a>
                  </div>
                </div>
                <div className="short-info">
                  <p>Dù bạn là người mới đến với Angular hay là đã biết qua về AngularJS, nếu bạn muốn tạo ra những ứng dụng Web tuyệt vời và cập nhật những công nghệ phát triển mới nhất. Khoá học này chính là lựa chọn dành cho bạn. Khoá học sẽ cung cấp cho bạn những kiến thức cần thiết để bạn đủ khả năng xây dựng các ứng dụng web chuyên nghiệp với Angular 6.</p>
                </div>
                <div className="blog-sharing row">
                  <div className="col-md-9 blog-views">
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                      <div className="post-views post-5686 entry-meta">
                        <span className="post-views-count">281</span>
                      </div>              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                      0              </span>
                  </div>
                  <div className="col-md-3 blog-share-btn">
                    <a  target="_blank">
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                    </a>
                  </div>
                </div>
                <div className="views visible-xs">
                  {/*                                            */}                        <div className="time">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    1 tháng trước          </div>
                </div>
              </div>
            </div>
            <div className="panel image-top clearfix">
              <a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-web-back-end-voi-node-js-khai-giang-ngay-18-03-2019/">
                <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/11/laptrinhvienio-khoa-hoc-lap-trinh-web-back-end-voi-nodejs-khai-giang-ngay-10-12-2018.png")'}}>
                </div>
              </a>
              <div className="content flex-container flex-direction-column">
                <h3 className="title"><a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-web-back-end-voi-node-js-khai-giang-ngay-18-03-2019/">Khóa học Lập trình Web Back-End với Node.js – Khai giảng ngày 18/03/2019</a></h3>
                <div className="row flex-container">
                  <div className="views col-sm-5 hidden-xs">
                    {/*                                                <span class="author">*/}{/*</span>*/}
                    <span className="time">
                      <i className="fa fa-clock-o" />
                      1 tháng trước              </span>
                  </div>
                  <div className="col-sm-7 category">
                    <a href="https://laptrinhvien.io/blogs?category=courses">
                      #Khoá học                  </a>
                  </div>
                </div>
                <div className="short-info">
                  <p>Bạn là người có đam mê trở thành một Web Developer chuyên nghiệp. Với Node.js bạn có thể làm việc trên bất kỳ lĩnh vực nào như Web Development (Xây dựng Back-end tốt), Mobile (Xây dựng Web Service) , Ứng dụng Web (Xây dựng các ứng dụng Real-time)....</p>
                </div>
                <div className="blog-sharing row">
                  <div className="col-md-9 blog-views">
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                      <div className="post-views post-5688 entry-meta">
                        <span className="post-views-count">259</span>
                      </div>              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                      </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                      0              </span>
                  </div>
                  <div className="col-md-3 blog-share-btn">
                    <a  target="_blank">
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                    </a>
                  </div>
                </div>
                <div className="views visible-xs">
                  {/*                                            */}                        <div className="time">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    1 tháng trước          </div>
                </div>
              </div>
            </div>
            <div className="panel image-top clearfix">
              <a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-android-khai-giang-ngay-18-03-2019/">
                <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/11/laptrinhvienio-khoa-hoc-lap-trinh-android-khai-giang-ngay-10-12-2018.png")'}}>
                </div>
              </a>
              <div className="content flex-container flex-direction-column">
                <h3 className="title"><a href="https://laptrinhvien.io/khoa-hoc-lap-trinh-android-khai-giang-ngay-18-03-2019/">Khóa học Lập trình Android – Khai giảng ngày 18/03/2019</a></h3>
                <div className="row flex-container">
                  <div className="views col-sm-5 hidden-xs">
                    {/*                                                <span class="author">*/}{/*</span>*/}
                    <span className="time">
                      <i className="fa fa-clock-o" />
                      1 tháng trước              </span>
                  </div>
                  <div className="col-sm-7 category">
                    <a href="https://laptrinhvien.io/blogs?category=courses">
                      #Khoá học                  </a>
                  </div>
                </div>
                <div className="short-info">
                  <p>Nắm bắt được nhu cầu tuyển dụng LẬP TRÌNH MOBILE VỚI ANDROID ngày càng nóng, <strong>LAPTRINHVIEN.IO</strong> đã cho ra mắt <strong><a href="https://laptrinhvien.io/lich-khai-giang/" target="_blank">KHÓA HỌC LẬP TRÌNH ANDROID</a></strong>. Với thời gian đào tạo trong 3 tháng, học viên sẽ đủ khả năng ứng tuyển vị trí LẬP TRÌNH MOBILE VỚI ANDROID tại các công ty phần mềm.</p>
                </div>
                <div className="blog-sharing row">
                  <div className="col-md-9 blog-views">
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                      <div className="post-views post-5690 entry-meta">
                        <span className="post-views-count">202</span>
                      </div>              </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                      
                    </span>
                    <span>
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                      0              </span>
                  </div>
                  <div className="col-md-3 blog-share-btn">
                    <a  target="_blank">
                      <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                    </a>
                  </div>
                </div>
                <div className="views visible-xs">
                  {/*                                            */}                        <div className="time">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                    1 tháng trước          </div>
                </div>
              </div>
            </div>
            <div id="load-more" />
            <div className="flex-container">
              <a id="prev-page-first" href="https://laptrinhvien.io/blogs/?category=courses&next=0">Quay Lại</a>
            </div>
          </div>
        <Widget/>
        </div>
      </div>
      <div className="footer blog">
        <div className="copyright">
          <div className="container">
            <div className="row flex-container flex-align-items-center flex-wrap">
              <div className="text col-xs-12 col-md-5 col-md-offset-1"> Bản Quyền © 2017 thuộc JTC. Thiết kế bởi <i className="fa fa-heart" /> <a href="http://janeto.com" target="_blank">JANETO</a>
              </div>
              <div className="subscribe-input col-xs-12 col-md-4" id="subscribe">
                <div role="form" className="wpcf7" id="wpcf7-f38-o1" lang="en-US" dir="ltr">
                  <div className="screen-reader-response" />
                  <form action="/blogs/?category=courses#wpcf7-f38-o1" method="post" className="wpcf7-form" noValidate="novalidate">
                    <div style={{display: 'none'}}>
                      <input type="hidden" name="_wpcf7" defaultValue={38} />
                      <input type="hidden" name="_wpcf7_version" defaultValue="4.7" />
                      <input type="hidden" name="_wpcf7_locale" defaultValue="en_US" />
                      <input type="hidden" name="_wpcf7_unit_tag" defaultValue="wpcf7-f38-o1" />
                      <input type="hidden" name="_wpnonce" defaultValue="1f6aa2986e" />
                    </div>
                    <div className="input-group">
                      <span className="wpcf7-form-control-wrap subscribe-email"><input type="email" name="subscribe-email" defaultValue size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email form-control" id="subscribe-email" aria-invalid="false" placeholder="EMAIL - SỐ ĐIỆN THOẠI" /></span><br />
                      <span className="input-group-btn"><br />
                        <button className="btn btn-default" type="button" >ĐĂNG KÝ</button><br />
                      </span>
                    </div>
                    <div className="wpcf7-response-output wpcf7-display-none" /></form></div>                    <div className="result">
                  <p className="subs-success" />
                  <p className="subs-error" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
</section>
    );
  }
}
export default Home;
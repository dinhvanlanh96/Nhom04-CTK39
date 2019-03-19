import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <section className="topbar blog">
          <div className="topbar-container">
            <div className="fl-left">
              <a  className="mobile-menu"><img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/menu.svg" /></a>
            </div>
            <a href="https://laptrinhvien.io" className="logo"><img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" /></a>
          </div>
          <div className="topbar-navigation">
            <nav className="nav-normal">
              <ul className="sidebar-nav">
                <li><a href="https://laptrinhvien.io/blogs?type=blog">TẤT CẢ</a></li>
                <li>
                  <a href="https://laptrinhvien.io/blogs?category=courses">KHOÁ HỌC</a>
                </li>
                <li>
                  <a href="https://laptrinhvien.io/blogs?category=su-kien">SỰ KIỆN</a>
                </li>
                <li><a href="https://laptrinhvien.io/blogs?type=promotion">KHUYẾN MÃI</a></li>
                <li><a href="https://laptrinhvien.io/blogs?category=laptrinhvienio">LAPTRINHVIEN.IO</a></li>
                <li><a href="https://laptrinhvien.io/blogs?category=tuyen-dung">TUYỂN DỤNG</a></li>
                <li className="video-menu">
                  <a href="https://laptrinhvien.io/video">VIDEO <span className="video-icon" /></a>
                </li>
                <li><a href="https://laptrinhvien.io/blogs?category=back-end">Back End</a></li>
                <li><a href="https://laptrinhvien.io/blogs?category=cpp">C++</a></li>
                <li><a href="https://laptrinhvien.io/blogs?category=front_end">Front End</a></li>
                <li><a href="https://laptrinhvien.io/blogs?category=mobile">Mobile</a></li>
              </ul>
            </nav>
            <div className="loader" />
          </div>
        </section>
        <section className="header hidden-xs">
          <div className="container">
            <a className="logo-link" href="https://laptrinhvien.io">
              <img className="logo" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" />
            </a>
            {/* <span className="blogs-title">Blogs</span> */}
            <div className="search">
              <img className="search-icon" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/search-icon.png" />
              <input id="searchText" className="form-control search-input" type="text" />
            </div>
          </div>
        </section>
        <section className="content">
        <div className="container blog-content">
          <div className="row">
            <div className="col-md-3 col-sm-3 hidden-xs">
              <div id="fixed-position-left" className="menu-left">
                <div className="panel">
                  <ul>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?type=blog">TẤT CẢ</a>
                    </li>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?category=courses">KHOÁ HỌC</a>
                    </li>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?category=su-kien">SỰ KIỆN</a>
                    </li>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?type=promotion">KHUYẾN MÃI</a>
                    </li>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?category=laptrinhvienio">LAPTRINHVIEN.IO</a>
                    </li>
                    <li>
                      <a href="https://laptrinhvien.io/blogs?category=tuyen-dung">TUYỂN DỤNG</a>
                    </li>
                    <li className="video-menu">
                      <a href="https://laptrinhvien.io/video">VIDEO <span className="video-icon" /></a>
                    </li>
                  </ul>
                </div>
                <div className="panel">
                  <ul>
                    <li><a href="https://laptrinhvien.io/blogs?category=back-end">Back End</a></li>
                    <li><a href="https://laptrinhvien.io/blogs?category=cpp">C++</a></li>
                    <li className="active"><a href="https://laptrinhvien.io/blogs?category=front_end">Front End</a></li>
                    <li><a href="https://laptrinhvien.io/blogs?category=mobile">Mobile</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-9 blog-listing">
              <div className="panel image-top clearfix">
                <a href="https://laptrinhvien.io/js08-chuoi-string-trong-javascript/">
                  <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/08/laptrinhvienio-blog-js-chuoi-string-trong-javascript.jpg")'}}>
                  </div>
                </a>
                <div className="content flex-container flex-direction-column">
                  <h3 className="title"><a href="https://laptrinhvien.io/js08-chuoi-string-trong-javascript/">[#JS08] Chuỗi (String) trong Javascript</a></h3>
                  <div className="row flex-container">
                    <div className="views col-sm-5 hidden-xs">
                      {/*                                                <span class="author">*/}
                      {/*</span>*/}
                      <span className="time">
                        <i className="fa fa-clock-o" />
                        6 tháng trước              </span>
                    </div>
                    <div className="col-sm-7 category">
                      <a href="https://laptrinhvien.io/blogs?category=laptrinhvienio">
                        #laptrinhvien.io                  </a>
                    </div>
                  </div>
                  <div className="short-info">
                    <p>Sau một thời gian dài vắng bóng, hôm nay <strong><a href="https://laptrinhvien.io/" target="_blank">laptrinhvien.io</a></strong> tiếp tục mang đến cho các các bạn kiến thức về kiểu dữ liệu trong Javascript, cụ thể hơn là kiểu dữ liệu "Chuỗi (String)". Đây là một trong những phần kiến thức rất quan trọng trong Javascript, hi vọng các bạn sẽ bổ sung kiến thức để vững bước trên con đường chinh phục <a href="https://laptrinhvien.io/video/" target="_blank">Web Front-End Developer</a>.</p>
                  </div>
                  <div className="blog-sharing row">
                    <div className="col-md-9 blog-views">
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                        <div className="post-views post-5020 entry-meta">
                          <span className="post-views-count">391</span>
                        </div>
                      </span>
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
                    {/*                                            */}
                    <div className="time">
                      <i className="fa fa-clock-o" aria-hidden="true" /> 6 tháng trước </div>
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
                </div>
              </div>
              <div className="panel image-top clearfix">
                <a href="https://laptrinhvien.io/css09-css-font-trong-css/">
                  <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/06/laptrinhvienio-css-font.jpg")'}}>
                  </div>
                </a>
                <div className="content flex-container flex-direction-column">
                  <h3 className="title"><a href="https://laptrinhvien.io/css09-css-font-trong-css/">[#CSS09] CSS- Font trong CSS</a></h3>
                  <div className="row flex-container">
                    <div className="views col-sm-5 hidden-xs">
                      {/*                                                <span class="author">*/}
                      {/*</span>*/}
                      <span className="time">
                        <i className="fa fa-clock-o" />
                        8 tháng trước              </span>
                    </div>
                    <div className="col-sm-7 category">
                      <a href="https://laptrinhvien.io/blogs?category=laptrinhvienio">
                        #laptrinhvien.io                  </a>
                    </div>
                  </div>
                  <div className="short-info">
                    <p>Trong một trang web đôi lúc bạn cần <b>in đậm</b>, <i>in nghiêng</i> hay thay đổi Font chữ của một đoạn văn bản nào đó mà không muốn sử dụng thẻ HTML để tác động. Chúng ta hoàn toàn có thể làm được điều đó dễ dàng với các thuộc tính <strong>Font trong CSS</strong>. Hãy cùng <strong>laptrinhvien.io</strong> tìm hiểu chi tiết trong bài học hôm nay các bạn nhé!</p>
                  </div>
                  <div className="blog-sharing row">
                    <div className="col-md-9 blog-views">
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                        <div className="post-views post-4712 entry-meta">
                          <span className="post-views-count">322</span>
                        </div>
                      </span>
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/comment-icon.png" />
                       
                      </span>
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/fb-icon.png" />
                        0              </span>
                    </div>
                    <div className="col-md-3 blog-share-btn">
                      <a target="_blank">
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/share-btn.png" />
                      </a>
                    </div>
                  </div>
                  <div className="views visible-xs">
                    {/*                                            */}
                    <div className="time">
                      <i className="fa fa-clock-o" aria-hidden="true" /> 8 tháng trước </div>
                  </div>
                </div>
              </div>
              <div className="panel image-top clearfix">
                <a href="https://laptrinhvien.io/tong-ket-phat-chung-nhan-hoc-vien-hoan-thanh-cac-khoa-hoc-lap-trinh-web-thang-032018/">
                  <div className="image" style={{backgroundImage: 'url("")'}}>
                  </div>
                </a>
                <div className="content flex-container flex-direction-column">
                  <h3 className="title"><a href="https://laptrinhvien.io/tong-ket-phat-chung-nhan-hoc-vien-hoan-thanh-cac-khoa-hoc-lap-trinh-web-thang-032018/">Tổng kết phát chứng nhận học viên hoàn thành các khóa học Lập trình Web tháng 03/2018</a></h3>
                  <div className="row flex-container">
                    <div className="views col-sm-5 hidden-xs">
                      {/*                                                <span class="author">*/}
                      {/*</span>*/}
                      <span className="time">
                        <i className="fa fa-clock-o" />
                        9 tháng trước              </span>
                    </div>
                    <div className="col-sm-7 category">
                      <a href="https://laptrinhvien.io/blogs?category=su-kien">
                        #SỰ KIỆN                  </a>
                    </div>
                  </div>
                  <div className="short-info">
                    <p>Trải qua chặng đường học tập tại laptrinhvien.io, Vào tối ngày 08/06/2018 Trung tâm tổ chức buổi tổng kết phát chứng nhận học viên hoàn thành các khóa học Lập trình Web tháng 03/2018 nhằm đánh giá các kết quả mà các bạn học viên đã đạt được, tuyên dương cũng như khen thưởng, khích lệ tinh thần các bạn khi hoàn thành khóa học.</p>
                  </div>
                  <div className="blog-sharing row">
                    <div className="col-md-9 blog-views">
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                        <div className="post-views post-4672 entry-meta">
                          <span className="post-views-count">44</span>
                        </div>
                      </span>
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
                    {/*                                            */}
                    <div className="time">
                      <i className="fa fa-clock-o" aria-hidden="true" /> 9 tháng trước </div>
                  </div>
                </div>
              </div>
              <div className="panel image-top clearfix">
                <a href="https://laptrinhvien.io/css08-css-text-trong-css/">
                  <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/05/laptrinhvienio-blog-css-text.jpg")'}}>
                  </div>
                </a>
                <div className="content flex-container flex-direction-column">
                  <h3 className="title"><a href="https://laptrinhvien.io/css08-css-text-trong-css/">[#CSS08] CSS- Text trong CSS</a></h3>
                  <div className="row flex-container">
                    <div className="views col-sm-5 hidden-xs">
                      {/*                                                <span class="author">*/}
                      {/*</span>*/}
                      <span className="time">
                        <i className="fa fa-clock-o" />
                        9 tháng trước              </span>
                    </div>
                    <div className="col-sm-7 category">
                      <a href="https://laptrinhvien.io/blogs?category=front_end">
                        #Front End                  </a>
                    </div>
                  </div>
                  <div className="short-info">
                    <p>Định dạng và thêm vào các kiểu định dạng đặc biệt cho phần nội dung một trang web là một vấn đề quan trọng cho bất cứ nhà thiết kế web nào. Ở bài học này các bạn cùng <strong>laptrinhvien.io</strong> tìm hiểu về các thuộc tính CSS về định dạng văn bản.</p>
                  </div>
                  <div className="blog-sharing row">
                    <div className="col-md-9 blog-views">
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                        <div className="post-views post-4570 entry-meta">
                          <span className="post-views-count">295</span>
                        </div>
                      </span>
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
                    {/*                                            */}
                    <div className="time">
                      <i className="fa fa-clock-o" aria-hidden="true" /> 9 tháng trước </div>
                  </div>
                </div>
              </div>
              <div className="panel image-top clearfix">
                <a href="https://laptrinhvien.io/bai-4-templates-interpolation-va-directives-trong-angular/">
                  <div className="image" style={{backgroundImage: 'url("https://laptrinhvien.io/wp-content/uploads/2018/05/laptrinhvienio-blog-templates-interpolation-directives-trong-angular.jpg")'}}>
                  </div>
                </a>
                <div className="content flex-container flex-direction-column">
                  <h3 className="title"><a href="https://laptrinhvien.io/bai-4-templates-interpolation-va-directives-trong-angular/">[#ANG04] Bài 4 – Templates, Interpolation và Directives trong Angular</a></h3>
                  <div className="row flex-container">
                    <div className="views col-sm-5 hidden-xs">
                      {/*                                                <span class="author">*/}
                      {/*</span>*/}
                      <span className="time">
                        <i className="fa fa-clock-o" />
                        10 tháng trước              </span>
                    </div>
                    <div className="col-sm-7 category">
                      <a href="https://laptrinhvien.io/blogs?category=laptrinhvienio">
                        #laptrinhvien.io                  </a>
                    </div>
                  </div>
                  <div className="short-info">
                    <p>Tiếp tục video bài học thứ 4 trong series học về Angular của <strong>LAPTRINHVIEN.IO</strong>. Bài học hôm này chúng ta sẽ tìm hiểu về Templates, Interpolation và Directives trong Angular để xây dựng một mẫu Template và tiếp cận bằng những cách khác nhau giúp chúng ta xây dựng được Template. Để hiểu rõ chúng ta cùng tìm hiểu chi tiết trong video bài học bạn nhé!</p>
                  </div>
                  <div className="blog-sharing row">
                    <div className="col-md-9 blog-views">
                      <span>
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/eyes-icon.png" />
                        <div className="post-views post-4462 entry-meta">
                          <span className="post-views-count">992</span>
                        </div>
                      </span>
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
                    {/*                                            */}
                    <div className="time">
                      <i className="fa fa-clock-o" aria-hidden="true" /> 10 tháng trước </div>
                  </div>
                </div>
              </div>
              <div id="load-more" />
              <div className="flex-container">
                <a id="prev-page-first" href="https://laptrinhvien.io/blogs/?category=front_end&next=0">Quay Lại</a>
              </div>
            </div>
            <div className="col-md-3 hidden-sm">
              <div id="fixed-position-right">
                <div className="panel">
                  <a href="https://laptrinhvien.io/cong-ty-janeto-lien-tuc-tuyen-dung-cac-vi-tri-tu-internship-toi-senior/">
                    <img className="promotion" src="https://laptrinhvien.io/wp-content/uploads/2018/09/laptrinhvienio-tin-tuyen-dung-cong-ty-janeto-dang-tuyen-dung-cac-vi-tri-tu-internship-toi-senior-thang-11-2018.png" />
                  </a>
                </div>
                <div className="panel">
                  <a href="https://laptrinhvien.io/khoa-hoc-web-front-end-nang-cao-voi-angular-6-khai-giang-03-10-2018/">
                    <img className="promotion" src="https://laptrinhvien.io/wp-content/uploads/2017/10/why-us-on-mobile-new.jpg" />
                  </a>
                </div>
                <div className="panel blank-promotion">
                </div>
              </div>
            </div>
          </div>
        </div>
       
          
      </section>
      </div>
    );
  }
}

export default App;

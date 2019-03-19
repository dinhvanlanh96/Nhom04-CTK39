import React, { Component } from 'react';
class Topbar extends Component {
  render() {
    return (
        <section classname="topbar blog">
            <div classname="topbar-container">
                <div classname="fl-left">
                <a classname="mobile-menu"><img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/menu.svg" /></a>
                </div>
                <a href="https://laptrinhvien.io" classname="logo"><img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" /></a>
            </div>
            <div classname="topbar-navigation">
                <nav classname="nav-normal">
                <ul classname="sidebar-nav">
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
                    <li classname="video-menu">
                    <a href="https://laptrinhvien.io/video">VIDEO <span classname="video-icon" /></a>
                    </li>
                    <li><a href="https://laptrinhvien.io/blogs?category=back-end">Back End</a></li>
                    <li><a href="https://laptrinhvien.io/blogs?category=cpp">C++</a></li>
                    <li><a href="https://laptrinhvien.io/blogs?category=front_end">Front End</a></li>
                    <li><a href="https://laptrinhvien.io/blogs?category=mobile">Mobile</a></li>
                </ul>
                </nav>
                <div classname="loader">
                </div>
            </div>
        </section>

    );

  }
export default Topbar;
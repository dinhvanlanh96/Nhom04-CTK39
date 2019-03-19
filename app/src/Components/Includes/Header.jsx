import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <section className="topbar blog">
      <div className="topbar-container">
        <div className="fl-left">
        <Link  to="/" className="mobile-menu">
        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/menu.svg" />
        </Link>
        </div>
        <Link to="/" className="logo">
        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" />
        </Link>
      </div>
      <div className="topbar-navigation">
        <nav className="nav-normal">
          <ul className="sidebar-nav">
            <li><Link to="/login">TẤT CẢ</Link></li>
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
            <li><a href="https://laptrinhvien.io/blogs?category=back-end">Back End</a></li><li><a href="https://laptrinhvien.io/blogs?category=cpp">C++</a></li><li><a href="https://laptrinhvien.io/blogs?category=front_end">Front End</a></li><li><a href="https://laptrinhvien.io/blogs?category=mobile">Mobile</a></li>              </ul>
        </nav>
        <div className="loader" />
      </div>
    </section>
    

    );
  }
  }
export default Header;
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <section className="topbar blog">
          <div className="topbar-container">
            <div className="fl-left">
              <a onclick="toggleNavigation();" className="mobile-menu"><img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/menu.svg" /></a>
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
            <span className="blogs-title">Blogs</span>
            <div className="search">
              <img className="search-icon" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/search-icon.png" />
              <input id="searchText" className="form-control search-input" type="text" onkeypress="return search(event, 'https://laptrinhvien.io');" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;

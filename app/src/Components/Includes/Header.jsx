import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
        <section classname="header hidden-xs">
  <div classname="container">
    <a classname="logo-link" href="https://laptrinhvien.io">
      <img classname="logo" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" />
    </a>
    {'{'}/* <span classname="blogs-title">Blogs</span> */{'}'}
    <div classname="search">
      <img classname="search-icon" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/search-icon.png" />
      <input id="searchText" classname="form-control search-input" type="text" />
    </div>
  </div>
</section>

    );

  }
export default Header;
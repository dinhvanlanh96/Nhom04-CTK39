import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Topbar extends Component {
  render() {
    return (
        <section className="header hidden-xs">
          <div className="container">
            <Link className="logo-link" to="/">
              <img className="logo" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/logo-white.png" />
            </Link>
            <div className="search">
              <img className="search-icon" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/search-icon.png" />
              <input id="searchText" className="form-control search-input" type="text" onkeypress="return search(event, 'https://laptrinhvien.io');" />
            </div>
          </div>
        </section>
    );

  }
}
export default Topbar;
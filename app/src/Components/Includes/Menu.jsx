import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render(){
        return( 
        <div className="col-md-3 col-sm-3 hidden-xs">
        <div id="fixed-position-left" className="menu-left">
          <div className="panel">
          <ul>
              <li>
                <Link to="/">TẤT CẢ</Link>
              </li>
              <li>
                <Link to="/khoa-hoc">KHOÁ HỌC</Link>
              </li>
              <li>
                <Link to="/su-kien">SỰ KIỆN</Link>
              </li>
              <li>
                <Link to="/khuyen-mai">KHUYẾN MÃI</Link>
              </li>
              <li>
                <Link to="/lap-trinh-vien">LAPTRINHVIEN</Link>
              </li>
              <li>
                <Link to="/tuyen-dung">TUYỂN DỤNG</Link>
              </li>
              <li className="video-menu">
                <Link to="/video">VIDEO <span className="video-icon" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
    }
}
export default Menu;
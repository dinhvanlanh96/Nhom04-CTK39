import React,{ Component } from 'react';
class Widget extends Component{
    render(){
        return( <div className="col-md-3 hidden-sm">
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
  );
    }
}
export default Widget;
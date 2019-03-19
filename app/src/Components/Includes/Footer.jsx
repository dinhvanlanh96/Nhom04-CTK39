import React, {Component} from 'react';
class Footer extends Component{
    render(){
        return(
             <div>
                <div className="hotline-button blog-page">
                    <div className="button-block">
                    <div className="icon phone">
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/old-telephone.png" />
                    </div>
                    <div className="icon facebook">
                        <a className="hidden-sm hidden-xs" href="https://www.facebook.com/laptrinhvienio/" target="_blank">
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/facebook-logo.png" />
                        </a>
                        <a className="hidden-lg hidden-md facebook-mobile-only" data-id={1363771876981532}>
                        <img className="hidden-lg hidden-md" src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/facebook-logo.png" />
                        </a>
                    </div>
                    <div className="icon instagram">
                        <a href="https://www.instagram.com/laptrinhvienio/" target="_blank">
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/instagram-logo.png" />
                        </a>
                    </div>
                    <div className="icon youtube">
                        <a href="https://www.youtube.com/c/laptrinhvienio/" target="_blank">
                        <img src="https://laptrinhvien.io/wp-content/themes/Training/asset/img/youtube-icon.png" />
                        </a>
                    </div>
                    </div>
                </div>
                <div className="hotline right blog-page">
                    <div className="info">
                    <div className="data">
                        <span><i className="fa fa-phone" aria-hidden="true" />0933 06 7997</span><br />
                        <span><i className="fa fa-phone" aria-hidden="true" />0933 26 7337</span><br />
                        <a href="mailto:tuyensinh@laptrinhvien.io" style={{color: 'inherit'}}>
                                <span><i className="fa fa-envelope" aria-hidden="true" />tuyensinh@laptrinhvien.org</span>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
        );
    
    }
}
export default Footer;
import React,{Component} from 'react';
import { Helmet } from 'react-helmet';
import './ERRO.css';
class ER404 extends Component{
    render(){
        return(
            
            <div className="content-wrapper"><Helmet><title>404</title></Helmet>
                <div className="container">
         
                            <h1>404 Error Page</h1>
                           
                    <section className="error-container">
                            <span>4</span>
                            <span><span className="screen-reader-text">0</span></span>
                            <span>4</span>
                           
                    </section>
                     </div>
                </div>
        );
    }
}
export default ER404;
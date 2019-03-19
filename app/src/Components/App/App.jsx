import React, { Component } from 'react';
import Header from './../Includes/Header';
import Topbar from './../Includes/Topbar';
import RouterURL from '../../Routers/RouterURL';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Footer from '../Includes/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Header/>
          <Topbar/>
          {this.showContentMenus(RouterURL)}
          <Footer/>
     </div>
      </Router>
    );
  }
  showContentMenus = (routes)=>{ 
    var result = null;
    if(routes.length>0)
    {
        result =routes.map((route,index)=>{
           return(<Route
                key={index}
                path={route.path}
                exact ={route.exact}
                component={route.main}
            />);
        });
    }
    return<Switch>{result}</Switch>
}
}

export default App;

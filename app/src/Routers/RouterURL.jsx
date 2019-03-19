import React from 'react';
import Home from '../Components/Pages/Home/Home';
import ER404 from '../Components/Pages/Error/ER404';
import Login from '../Components/Pages/Login/Login';
const RouterURL=[
        {
            path:'/',
            exact:true,
            main:()=><Home/>
        },
        {
            path:'/login',
            exact:true,
            main:()=><Home/>
        },
        {
            path:'',
            exact:true,
            main:()=><ER404/>
        }
];
export default RouterURL;
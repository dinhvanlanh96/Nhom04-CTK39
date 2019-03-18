import React from 'react';
import Home from '../Components/Pages/Home/Home';
import Contact from '../Components/Pages/Contact/Contact';
import Profile from '../Components/Pages/Profile/Profile';
import DetailsPlace from '../Components/Pages/DetailsPlace/DetailsPlace';
import ER404 from '../Components/Pages/Error/ER404';
import Login from '../Components/Pages/Login/Login';
import Register from '../Components/Pages/Register/Register';
const RouterURL=[
        {
            path:'/',
            exact:true,
            main:()=><Home/>
        },
        {
            path:'/profile',
            exact:true,
            main:()=><Profile/>
        },
        {
            path:'/chi-tiet',
            exact:true,
            main:()=><DetailsPlace/>
        },
        {
            path:'/lien-he',
            exact:true,
            main:()=><Contact/>
        },
        {
            path:'/login',
            exact:true,
            main:()=><Login/>
        },
        {
            path:'/register',
            exact:true,
            main:()=><Register/>
        },
        {
            path:'',
            exact:true,
            main:()=><ER404/>
        }
];
export default RouterURL;
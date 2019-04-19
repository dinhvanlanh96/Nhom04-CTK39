<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/admin', function () {
    return view('Layout.Main');
});
Route::get('welcome2',function(){
    return view('welcome2');
});
Route::group(['prefix' => 'account'],function (){
     Route::get ('/login','LoginController@index');//
     Route::post('/Authentication','LoginController@PostLogin'); //
});
//
Route::group(['prefix' => 'Dashboards'],function (){
     Route::get('/Dashboards','DashboardsController@index'); // Khu Trọ
});
Route::group(['prefix' => 'Profiles'],function (){
     Route::get('/Profiles','ProfileController@index'); // Thông Tin Cá NHân
});//

//--------------------------------------------- Fron- End --------------------------------
Route::get('/', function () {
     return view('view-welcome.welcome');
 });
 Route::group(['prefix' => '/blogs'], function () {
      Route::get('/',function(){
        return view('view-blog.pages.home.home');
     });
     // Router Khóa Học
     Route::get('/khoa-hoc',function(){
         return view('view-blog.pages.course.course');
     });
     Route::get('/khoa-hoc/details',function(){
         return view('view-blog.pages.course.course-details');
     });
     // Router Các sự kiện
     Route::get('/su-kien',function(){
         return view('view-blog.pages.event.event');
     });
      
 });
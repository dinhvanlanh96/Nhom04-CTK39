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

Route::group(['prefix' => '/'], function () {
    Route::get('/', function () {
        return view('view-welcome.welcome');
    });
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
// -------------------------------------------Back-End-------------------------------------//
Route::group(['prefix' => '/adminator'],function (){
    Route::get('/',function(){
        return view('view-admin.Layout.Main');
    });
});
Route::get('welcome2',function(){
    return view('view-admin.welcome2');
});
Route::group(['prefix' => 'account'],function (){
     Route::get ('/login','LoginController@index');//
     Route::post('/Authentication','LoginController@PostLogin'); //
});
//
Route::group(['prefix' => 'Dashboards'],function (){
     Route::get('/Dashboards','BackEnd\DashboardsController@index'); //
});
Route::group(['prefix' => 'Profiles'],function (){
     Route::get('/Profiles','ProfileController@index'); // Thông Tin Cá NHân
});//

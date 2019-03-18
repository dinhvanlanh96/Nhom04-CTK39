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
Route::get('/', function () {
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
//
Route::group(['prefix' => 'Buildings'],function (){
     Route::get('/Buildings','BuildingsController@index'); // Khu Trọ
});
//
Route::group(['prefix' => 'Rooms'],function (){
     Route::get('/Rooms','RoomsController@index'); // Phòng Trọ
});
//
Route::group(['prefix' => 'Services'],function (){
     Route::get('/Services','ServicesController@index'); //  Dịch Vụ
});//
Route::group(['prefix' => 'Devices'],function (){
     Route::get('/Devices','DevicesController@index'); // Thiết Bị
});//
Route::group(['prefix' => 'Profiles'],function (){
     Route::get('/Profiles','ProfileController@index'); // Thông Tin Cá NHân
});//
Route::group(['prefix' => 'Units'],function (){
     Route::get('/Units','UnitsController@index'); //
});//
Route::group(['prefix' => 'Renters'],function (){
     Route::get('/Renters','RentersController@index'); //
});//
Route::group(['prefix' => 'Renter_histories'],function (){
     Route::get('/Renter_histories','Renter_historiesController@index'); //
});//
Route::group(['prefix' => 'Responses'],function (){
     Route::get('/Responses','ResponsesController@index'); //
});//
Route::group(['prefix' => 'Login'],function (){
     Route::get('/Login','LoginController@index'); // Login
});//
Route::group(['prefix' => 'Deposits'],function (){
     Route::get('/Deposits','DepositsController@index'); // Đặt Cọc Phòng
});//
Route::group(['prefix' => 'Leases'],function (){
     Route::get('/Leases','LeasesController@index'); //
});//
Route::group(['prefix' => 'Formulas'],function (){
     Route::get('/Formulas','LeasesController@index'); //
});//

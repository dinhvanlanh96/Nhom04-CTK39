<?php

namespace App\Http\Controllers\BackEnd;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
class LoginController extends Controller
{
    public function index(){

          return view('View-admin.Login.Login');
    }
    public function PostLogin(Request $Request)
    {
            $email = $Request->post('email');
            $password = $Request->post('password');
            if($email=='abc@gmail.com' && $password=='12345')
            {
                  return   [
                        'status' => true
                  ];
                        
            }
            else{
                  return  
                        [
                        'status' => false,
                        'msg' => 'Email hoặt mật khẩu không dúng !' ]
                        ;
                  
            }
      
    }
}

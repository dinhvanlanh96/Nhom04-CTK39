<?php

namespace App\Http\Controllers\BackEnd;

use Illuminate\Http\Request;

class LoginController extends Controller
{

    public function index(){
          return view('Login.Login');
    }
}

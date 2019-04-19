<?php

namespace App\Http\Controllers\BackEnd;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function index(){
      return view('Profiles.Profiles');
    }
}

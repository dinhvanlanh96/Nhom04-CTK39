<?php

namespace App\Http\Controllers\BackEnd;

use Illuminate\Http\Request;

class DashboardsController extends Controller
{

    public function index(){
          return view('Dashboards.Dashboards');
    }
}

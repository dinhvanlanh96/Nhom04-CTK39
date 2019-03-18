<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardsController extends Controller
{

    public function index(){
          return view('Dashboards.Dashboards');
    }
}

<?php

namespace App\Http\Controllers\BackEnd;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardsController extends Controller
{

    public function index(){
          return view('View-admin.Dashboards.Dashboards');
    }
}

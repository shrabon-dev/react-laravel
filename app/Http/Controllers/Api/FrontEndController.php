<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Video;

class FrontEndController extends Controller
{
    public function Movies(){
        $movies = Video::all();
         return response()->json([
            'status' => 'Success',
            'value' => $movies,
            'message' => 'Movies fetched successfully',
         ]);
    }
}

<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\VideoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/auth/logout',[AuthController::class,'logout']);
    Route::apiResource('/auth/users', UserController::class);
    Route::apiResource('/upload', VideoController::class);

});

Route::post('/auth/signup',[AuthController::class,'signup']);
Route::post('/auth/login',[AuthController::class,'login']);

<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function signup(SignupRequest $request){

        $data = $request->validated();

        /** @var \App\Models\User $user */

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('mian')->plainTextToken;

        return response(['token'=>$token,'data'=>$user]);
    }

    // Login Method Start
    public function login(LoginRequest $request){

        $credential = $request->validated();

        /** @var \App\Models\User $user */

         Auth::attempt($credential);

         $user = Auth::user();

        $token = $user->createToken('main')->plainTextToken;

        return response([
            'data'=> $user,
            'token' => $token,
        ]);
    }
    // Logout Method Start
    public function logout(Request $request){
        /** @var User $user */

        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response(content:'',status:204);

    }
    public function user(){
        $user = User::all();
        return response($user);
    }
}

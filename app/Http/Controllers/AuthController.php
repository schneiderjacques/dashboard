<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                'token' => $user->createToken(time())->plainTextToken
            ], 200);
        }

        return response()->json([
            'errors' => "Unable to connect, please verify your email / password",
        ], Response::HTTP_UNPROCESSABLE_ENTITY);

    }

    public function dashboard(): JsonResponse
    {
        return response()->json([
            'success' => 'Bienvenue'
        ]);
    }
}

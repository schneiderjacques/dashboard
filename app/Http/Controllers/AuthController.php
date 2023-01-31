<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
            $user = User::where('email', $request->email)->first();
            error_log($request->password);
            error_log($user->password);
            error_log(Hash::check($request->password, $user->password));
            if ( Hash::check($request->password, $user->password)) {
                return response()->json([
                    'token' => $user->createToken(time())->plainTextToken
                ]);
            } else {
                return response()->json([
                    'error' => "authentification_failed"]);
            }
    }
    public function dashboard(): JsonResponse{
        return response()->json([
            'success' => 'Bienvenue'
        ]);
    }
}

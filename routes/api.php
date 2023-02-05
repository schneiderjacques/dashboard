<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/dashboard', [AuthController::class, 'dashboard'])
    ->middleware('auth:sanctum');
Route::post('/login', [AuthController::class, 'authenticate']);


// Routes protégées
Route::group(['middleware' => ['auth:sanctum']], function() {
    // vérifier si utilisateur connecté
    Route::get('/authenticated', function () {
        return true;
    });
    Route::get('user', [UserController::class, 'user']);




});

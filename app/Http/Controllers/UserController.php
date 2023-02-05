<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    /**
     * méthode retournant les données de l'utilisateur courant
     * @param Request $request
     * @return mixed
     */
    public function user(Request $request) {
        return $request->user();
    }

}

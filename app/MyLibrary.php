<?php

namespace App;

use Illuminate\Http\Request;

final Class MyLibrary {

   public static function routeHaveMiddlewareAuth(Request $request)
   {
      $middlewares = $request->route()->getAction();
      foreach ($middlewares['middleware'] as $middleware) {
         if ($middleware === 'auth:sanctum') return true;
      }
      return false;
   }

}
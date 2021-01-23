<?php

namespace App;

use Illuminate\Http\Request;

// clase que no puede ser extendida.
// no va a tener nunca un extends
final Class MyLibrary {

   public static function routeHaveMiddlewareAuth(Request $request): bool
   {
      $middlewares = $request->route()->getAction();
      foreach ($middlewares['middleware'] as $middleware) 
      {
         if ($middleware === 'auth:sanctum') return true;
      }

      return false;
   }

   public static function fixedMultiSelectArray(Array $data): array
   {
      $items = [];
      foreach ($data as $key => $item) 
      {
         $items[$key] = $item['value'];
      }

      return $items;
   }

}
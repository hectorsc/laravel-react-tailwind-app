<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CheckPathExists
{
    public function handle(Request $request, Closure $next)
    {
        $routes = Route::getRoutes();
        $route = Request::create($request->url());
        
        if ($routes->match($route)->uri === '{path?}' && !auth()->check()) {
            abort(404); 
        }
        
        return $next($request);
    }
}

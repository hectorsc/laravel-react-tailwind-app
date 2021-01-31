<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactController extends Controller
{
    public function __invoke(Request $request)
    {
        $reactFrontRoutes = ['categorias', 'productos', 'etiquetas', 'noticias'];
        
        $view = $this->viewFront($reactFrontRoutes, $request);
        return view($view);

    }

    private function viewFront(Array $routes, Request $currentRoute)
    {
        $view = false;

        foreach ($routes as $route) 
        {
            if ($currentRoute->path() === $route) {
                $view = 'welcome';
            }
        }

        if (! $view) {
            abort(404);
        }

        return $view;
    }
 
}

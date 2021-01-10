<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    
    public function index()
    {
        $products = Product::where('user_id', Auth::id())->get();
        return new ProductCollection($products);  
    }

   
    public function store(Request $request)
    {
        //
    }

    
    public function show(Product $product)
    {
        //
    }

   
    public function update(Request $request, Product $product)
    {
        //
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}

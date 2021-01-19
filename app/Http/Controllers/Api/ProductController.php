<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::where('user_id', Auth::id())->get();
        return new ProductCollection($products);  
    }

    public function store(ProductRequest $request)
    {
        $request->merge(['category_id' => $request->category_id['value']]);
        $request->user()->products()->create($request->all());
        return response()->json(['message' => 'Created successfully'], 200); 
    }
 
    public function show(Product $product)
    {
        $this->authorize('view', $product);
        return new ProductResource($product->load('category'));
    }

    public function update(ProductRequest $request, Product $product)
    {
        $this->authorize('update', $product);
        $request->merge(['category_id' => $request->category_id['value']]);
        $product->update($request->except('category'));
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Product $product)
    {
        $this->authorize('delete', $product);
        $product->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}

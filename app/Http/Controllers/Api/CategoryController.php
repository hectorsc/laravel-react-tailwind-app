<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::where('user_id', Auth::id())->get();
        return new CategoryCollection($categories);
    }

    public function store(CategoryRequest $request)
    {
        $request->user()->categories()->create($request->all());
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Category $category)
    {
        $this->authorize('view', $category);
        return new CategoryResource($category->load('products'));
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $this->authorize('update', $category);
        $category->update($request->except('products'));
        return response()->json(['message' => 'Updated successfully'], 200);
    }

    public function destroy(Category $category)
    {
        $this->authorize('delete', $category);
        $category->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}

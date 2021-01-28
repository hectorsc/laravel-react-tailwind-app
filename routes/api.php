<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TagController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\PostCollection;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\TagCollection;
use App\Models\Category;
use App\Models\Post;
use App\Models\Product;
use App\Models\Tag;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// REACT BACK
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('/category', CategoryController::class);
    Route::apiResource('/product', ProductController::class);
    Route::apiResource('/tag', TagController::class);
    Route::apiResource('/post', PostController::class);
});

// REACT FRONT
// como solamente son endpoint no creamos controller
Route::get('/getCategories', function () {
    $categories = Category::with('user', 'products')->get();
    return response(new CategoryCollection($categories));   
});

Route::get('/getPosts', function () {
    $posts = new Post();
    return response(new PostCollection($posts->getPosts()));
});

Route::get('/getProducts', function () {
    $products = Product::with('user', 'category')->get();
    return response(new ProductCollection($products));
});

Route::get('/getTags', function () {
    $tags = Tag::with('user', 'posts')->get();
    return response(new TagCollection($tags));
});

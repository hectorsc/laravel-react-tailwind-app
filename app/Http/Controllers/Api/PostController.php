<?php

namespace App\Http\Controllers\Api;

use App\Models\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Http\Resources\PostCollection;
use App\Http\Resources\PostResource;
use App\MyLibrary;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::where('user_id', Auth::id())->get();
        return new PostCollection($posts);
    }

    public function store(PostRequest $request)
    {
        $tags = MyLibrary::fixedMultiSelectArray($request->tags);
        $slug = Str::of($request->title)->slug('-');
        $request->merge(['slug' => $slug]);
        $request->user()->posts()->create($request->except('tags'))->tags()->attach($tags);
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Post $post)
    {
        $this->authorize('view', $post);
        return new PostResource($post->load('tags'));
    }

    public function update(PostRequest $request, Post $post)
    {
        $this->authorize('update', $post);
        $tags = MyLibrary::fixedMultiSelectArray($request->tags);
        $slug = Str::of($request->title)->slug('-');
        $request->merge(['slug' => $slug]);
        
        $post->update($request->except('tags'));
        $post->tags()->sync($tags);
        return response()->json(['message' => 'Updated successfully'], 200);   
    }
    
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->tags()->detach();
        $post->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}

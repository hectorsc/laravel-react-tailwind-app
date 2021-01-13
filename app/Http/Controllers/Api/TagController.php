<?php

namespace App\Http\Controllers\Api;

use App\Models\Tag;
use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\TagCollection;
use App\Http\Resources\TagResource;

class TagController extends Controller
{
    public function index()
    {
        $tags = Tag::where('user_id', Auth::id())->get();
        return new TagCollection($tags);
    }

    public function store(TagRequest $request)
    {
        $request->user()->tags()->create($request->all());
        return response()->json(['message' => 'Created successfully'], 200);
    }

    public function show(Tag $tag)
    {
        return new TagResource($tag->load('posts'));
    }

    public function update(TagRequest $request, Tag $tag)
    {
        $tag->update($request->except('posts'));
        return response()->json(['message' => 'Updated successfully'], 200);

    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}

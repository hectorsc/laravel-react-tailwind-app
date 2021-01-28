<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\MyLibrary;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (int) $this->id),
            'title' => (string) $this->title,
            'sub_title' => (string) $this->sub_title,
            'body' => (string) $this->body,
            'active' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (bool) $this->active),
            'tags' => TagResource::collection($this->whenLoaded('tags')),
            'user' => new UserResource($this->whenLoaded('user'))
        ];
    }
}

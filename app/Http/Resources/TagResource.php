<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\MyLibrary;

class TagResource extends JsonResource
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
            'name' => (string) $this->name,
            'active' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (bool) $this->active),
            // 'posts' => PostResource::collection($this->whenLoaded('posts'))
        ];
    }
}

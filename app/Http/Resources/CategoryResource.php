<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\MyLibrary;

class CategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (int) $this->id),
            'name' => (string) $this->name,
            'active' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (boolean) $this->active),
            'products' => ProductResource::collection($this->whenLoaded('products'))
        ];
    }
}

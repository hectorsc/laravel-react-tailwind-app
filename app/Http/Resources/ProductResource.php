<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\MyLibrary;

class ProductResource extends JsonResource
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
            'category_id' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (int) $this->category_id),
            'name' => (string) $this->name,
            'ref' => (string) $this->ref,
            'price' => (int) $this->price,
            'offer_price' => (int) $this->offer_price,
            'active' => $this->when(MyLibrary::routeHaveMiddlewareAuth($request), (boolean) $this->active),
            'category' => new CategoryResource($this->whenLoaded('category')),
            'user' => new UserResource($this->whenLoaded('user'))
        ];
       
    }
}

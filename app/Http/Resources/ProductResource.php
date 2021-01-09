<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

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
            'id' => (int) $this->id,
            'name' => (string) $this->name,
            'ref' => (string) $this->ref,
            'price' => (int) $this->price,
            'offer_price' => (int) $this->offer_price,
            'active' => (bool) $this->active,
        ];
       
    }
}

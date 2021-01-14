<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class TagCollection extends ResourceCollection
{
    public $collects = TagResource::class;

    public function toArray($request)
    {
        return [
            'data' => $this->collection
        ];
    }
}

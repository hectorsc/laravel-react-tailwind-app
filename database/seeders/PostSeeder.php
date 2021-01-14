<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Tag;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::factory(10)
            ->has(
                Tag::factory()
                    ->count(2)
                    ->state(function (array $attributes, Post $post) {
                        return ['user_id' => $post->user_id];
                    })
            )
            ->create();
    }
}

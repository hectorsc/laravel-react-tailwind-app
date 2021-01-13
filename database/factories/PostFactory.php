<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\User;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title = $this->faker->sentence(3);

        return [
            'user_id' => function () {
                return User::query()->inRandomOrder()->first()->id;
            },
            'title' => $title,
            'sub_title' => $this->faker->sentence(5),
            'body' => $this->faker->text(3000),
            'slug'  => Str::slug($title)
        ];
    }
}

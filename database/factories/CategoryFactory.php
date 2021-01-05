<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class CategoryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Category::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // Esta forma de obtener el user_id me genera un usuario
            // por cada categoría generada y le asigna el id
            // 'user_id' => User::factory(),
            'user_id' => function () {
                return User::query()->inRandomOrder()->first()->id;
            },
            'name' => $this->faker->word,
        ];
    }
}

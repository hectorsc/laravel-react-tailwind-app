<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Category;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $userId = User::query()->inRandomOrder()->first()->id;

        return [
            'user_id' => $userId,
            'category_id' => function () use ($userId) {
                // necesitamos un category_id que haya creado el usuario user_id
                return Category::query()->where('user_id', $userId)->inRandomOrder()->first()->id;
            },
            'name' => $this->faker->word(),
            'ref' => $this->faker->unique()->bothify('???-#####'),
            'price' => $this->faker->randomNumber(4, false),
            'offer_price' => $this->faker->randomNumber(4, false)
        ];
    }
}

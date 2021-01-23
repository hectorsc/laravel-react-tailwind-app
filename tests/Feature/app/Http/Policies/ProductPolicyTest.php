<?php

namespace Tests\Feature\app\Http\Policies;

use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductPolicyTest extends TestCase
{
    use RefreshDatabase;

    private User $user;
    private Category $category;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
        $this->category = Category::factory()->create();
    }
    
    public function test_user_with_permit_can_access_product()
    {
        $product = Product::factory()->create();

        $this->assertTrue($this->user->can('view', $product));
        $this->assertTrue($this->user->can('update', $product));
        $this->assertTrue($this->user->can('delete', $product));

    }

    public function test_user_without_permit_cannot_access_product()
    {
        $userTwo = User::factory()->create();

        $product = Product::factory()->create([
            'user_id' => $this->user->id,
            'category_id' => $this->category->id
        ]);

        $this->assertFalse($userTwo->can('view', $product));
        $this->assertFalse($userTwo->can('update', $product));
        $this->assertFalse($userTwo->can('delete', $product));
    }
   
}

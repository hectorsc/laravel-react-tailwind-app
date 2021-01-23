<?php

namespace Tests\Feature\app\Http\Policies;

use App\Models\Category;
use App\Models\User;
// use App\Policies\CategoryPolicy;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryPolicyTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }
    
    public function test_user_with_permit_can_access_category()
    {
        $category = Category::factory()->create();

        // $policies = new CategoryPolicy();
        // $response = $policies->view($user, $category);
        // dd($response->message());

        $this->assertTrue($this->user->can('view', $category));
        $this->assertTrue($this->user->can('update', $category));
        $this->assertTrue($this->user->can('delete', $category));

    }

    public function test_user_without_permit_cannot_access_category()
    {
        $userTwo = User::factory()->create();

        $category = Category::factory()->create([
            'user_id' => $this->user->id
        ]);

        $this->assertFalse($userTwo->can('view', $category));
        $this->assertFalse($userTwo->can('update', $category));
        $this->assertFalse($userTwo->can('delete', $category));
    }
}

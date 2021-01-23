<?php

namespace Tests\Feature\app\Http\Policies;

use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostPolicyTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }
    
    public function test_user_with_permit_can_access_post()
    {
        $post = Post::factory()->create();

        $this->assertTrue($this->user->can('view', $post));
        $this->assertTrue($this->user->can('update', $post));
        $this->assertTrue($this->user->can('delete', $post));

    }

    public function test_user_without_permit_cannot_access_post()
    {
        $userTwo = User::factory()->create();

        $post = Post::factory()->create([
            'user_id' => $this->user->id
        ]);

        $this->assertFalse($userTwo->can('view', $post));
        $this->assertFalse($userTwo->can('update', $post));
        $this->assertFalse($userTwo->can('delete', $post));
    }
    
}

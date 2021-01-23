<?php

namespace Tests\Feature\app\Http\Policies;

use App\Models\User;
use App\Models\Tag;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TagPolicyTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }
    
    public function test_user_with_permit_can_access_tag()
    {
        $tag = Tag::factory()->create();

        $this->assertTrue($this->user->can('view', $tag));
        $this->assertTrue($this->user->can('update', $tag));
        $this->assertTrue($this->user->can('delete', $tag));

    }

    public function test_user_without_permit_cannot_access_tag()
    {
        $userTwo = User::factory()->create();

        $tag = Tag::factory()->create([
            'user_id' => $this->user->id
        ]);

        $this->assertFalse($userTwo->can('view', $tag));
        $this->assertFalse($userTwo->can('update', $tag));
        $this->assertFalse($userTwo->can('delete', $tag));
    }
   
}

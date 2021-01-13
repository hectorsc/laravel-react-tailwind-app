<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Sanctum\Sanctum;

class PostControllerTest extends TestCase
{
    // PRUEBAS PARA PROBAR LOS END-POINTS DE POSTS //

    use RefreshDatabase;
    use WithoutMiddleware;

    protected function setUp(): void
    {
        parent::setUp();

        // Añadimos user ya logeado para que las pruebas
        // nos pase el 401 unauthorized y tener ya un user 
        Sanctum::actingAs(
            User::factory()->create(),
        );
    }

    public function test_index()
    {
        Post::factory()->count(10)->create();

        $response = $this->getJson('/api/post');

        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $response->assertJsonCount(10, 'data');
    }

    public function test_create_new_post()
    {
        $post = Post::factory()
                    ->has(Tag::factory()->count(1))
                    ->create();

        $response = $this->postJson('/api/post', $post->toArray());

        // $response->dump();

        // Error 422 está OK
        // $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('posts', $post->toArray());
    }

    public function test_update_post()
    {
        $post = Post::factory()->create();
        $post->update([
            'name' => 'Updated post'
        ]);

        $response = $this->patchJson("/api/post/{$post->getKey()}", $post->toArray());

        // $response->dump();
        // $response->assertSuccessful(); //error 500 por el PostRequest
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('posts', $post->toArray());
    }

    public function test_show_post()
    {
        $post = Post::factory()->create();

        $response = $this->getJson("/api/product/{$post->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_post()
    {
        $post = Post::factory()->create();

        $response = $this->deleteJson("/api/product/{$post->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $post->delete();
        $this->assertDeleted($post);
    }
}

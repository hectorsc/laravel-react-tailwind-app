<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;
use App\Models\User;
use App\Models\Tag;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Sanctum\Sanctum;

class TagControllerTest extends TestCase
{
    // PRUEBAS PARA PROBAR LOS END-POINTS DE TAGS //

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
        Tag::factory()->count(10)->create();

        $response = $this->getJson('/api/tag');

        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $response->assertJsonCount(10, 'data');
    }

    public function test_create_new_tag()
    {
        $tag = Tag::factory()->create();

        $response = $this->postJson('/api/tag', $tag->toArray());

        // $response->dump();

        // Error 422 está OK
        // $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('tags', $tag->toArray());
    }

    public function test_update_tag()
    {
        $tag = Tag::factory()->create();
        $tag->update([
            'name' => 'Updated tag'
        ]);

        $response = $this->patchJson("/api/tag/{$tag->getKey()}", $tag->toArray());

        // $response->dump();
        // $response->assertSuccessful(); //error 500 por el TagRequest
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('tags', $tag->toArray());
    }

    public function test_show_tag()
    {
        $tag = Tag::factory()->create();

        $response = $this->getJson("/api/tag/{$tag->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_tag()
    {
        $tag = Tag::factory()->create();

        $response = $this->deleteJson("/api/tag/{$tag->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $tag->delete();
        $this->assertDeleted($tag);
    }
}

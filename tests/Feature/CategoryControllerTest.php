<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Sanctum\Sanctum;
class CategoryControllerTest extends TestCase
{
    // PRUEBAS PARA PROBAR LOS END-POINTS DE CATEGORIES //

    use RefreshDatabase;
    use WithoutMiddleware;
    
    protected function setUp(): void
    {
        parent::setUp();

        // Añadimos esto para que las pruebas nos pase el
        // 401 unauthorized pq esto nos logea
        Sanctum::actingAs(
            User::factory()->create(),
        );
    }

    public function test_index()
    {
        Category::factory()->count(10)->create();

        $response = $this->getJson('/api/categories');

        $response->assertSuccessful();
        // $response->assertHeader('content-type', 'application/json');

        $response->assertJsonCount(10, 'data');
    }

    public function test_create_new_category()
    {
        $data = [
            'name' => 'created category'
        ];
        $response = $this->postJson('/api/categories', $data);

        $response->dump();

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('categories', $data);
    }

    public function test_update_category()
    {
        $category = Category::factory()->create();
        $data = [
            'name' => 'Updated category',
        ];

        $response = $this->patchJson("/api/categories/{$category->getKey()}", $data);
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('categories', $data);

    }

    public function test_show_category()
    {
        // probando probando
        $category = Category::factory()->create();

        $response = $this->getJson("/api/categories/{$category->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_category()
    {
        $category = Category::factory()->create();

        $response = $this->deleteJson("/api/categories/{$category->getKey()}");

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDeleted($category);
    }
    
}

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;

class CategoryControllerTest extends TestCase
{
    // PRUEBAS PARA PROBAR LOS END-POINTS DE CATEGORIES //
    
    use RefreshDatabase;

    public function test_index()
    {
        Category::factory()->count(5)->create();

        $response = $this->getJson('/api/categories');

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $response->assertJsonCount(5, 'data');
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

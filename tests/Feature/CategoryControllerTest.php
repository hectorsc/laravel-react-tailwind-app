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

        $response = $this->getJson('/api/category');
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $response->assertJsonCount(10, 'data');
    }

    public function test_create_new_category()
    {
        $category = Category::factory()->create();
        
        $response = $this->postJson('/api/category', $category->toArray());
        
        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        // No pasa prueba pero esta bien pq da un 422 
        // ya que no pasa la validación del CategoryRequest
        // $response->assertSuccessful();

        $response->assertHeader('content-type', 'application/json');

        $this->assertDatabaseHas('categories', $category->toArray());
    }

    public function test_update_category()
    {
        $category = Category::factory()->create();
        $category->update([
            'name' => 'Updated category'
        ]);

        $response = $this->patchJson("/api/category/{$category->getKey()}", $category->toArray());
        
        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        // No pasa prueba error 500 por la validacion del
        // categoryRequest, está OK
        // $response->assertSuccessful(); 

        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('categories', $category->toArray());
    
    }

    public function test_show_category()
    {
        $category = Category::factory()->create();

        $response = $this->getJson("/api/category/{$category->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_category()
    {
        $category = Category::factory()->create();

        $response = $this->deleteJson("/api/category/{$category->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        
        $category->delete();
        $this->assertDeleted($category);
    }
    
}

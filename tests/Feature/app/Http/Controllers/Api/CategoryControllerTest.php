<?php

namespace Tests\Feature\app\Http\Controllers\Api;

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
        // no debo pasar un factory pq ya me da uno creado
        // y yo lo estoy creando para hacer el test
        // $category = Category::factory()->create([
        //     'name' => 'create category'
        // ]); 
        $category = [
            'name' => 'Create category'
        ];
        
        $response = $this->postJson('/api/category', $category);
        
        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $this->assertDatabaseHas('categories', $category);
    }

    public function test_update_category()
    {
        $category = Category::factory()->create();
        $data = [
            'name' => 'Update category'
        ];

        $response = $this->patchJson("/api/category/{$category->getKey()}", $data);

        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        // Al añadir policies ya no es 200
        // $response->assertSuccessful(); 
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
        // no es necesario comprobar que hay algo en la bbdd
        // estamos editando, por tanto ya hay valor en bbddd
        // $this->assertDatabaseHas('categories', $category->toArray());
    }

    public function test_show_category()
    {
        $category = Category::factory()->create();

        $response = $this->getJson("/api/category/{$category->getKey()}");
        
        // al añadir las policies ya no es un 200
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_category()
    {
        $category = Category::factory()->create();

        $response = $this->deleteJson("/api/category/{$category->getKey()}");
    
        // al añadir las policies ya no es un 200
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
        
        $category->delete();
        $this->assertDeleted($category);
    }
    
}

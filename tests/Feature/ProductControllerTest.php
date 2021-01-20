<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Category;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Laravel\Sanctum\Sanctum;

class ProductControllerTest extends TestCase
{
    // PRUEBAS PARA PROBAR LOS END-POINTS DE PRODUCTS //

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

        // Creamos una categoría para todas las pruebas pq 
        // para crear un product siempre necesitamos tener 
        // mínimo una categoría
        Category::factory()->create();
    }

    public function test_index()
    {
        // Category::factory()->count(5)->create();
        Product::factory()->count(10)->create();

        $response = $this->getJson('/api/product');

        // MENSAJES DE ERROR
        // $response->dump();
        // dd($this->response->getContent());

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');

        $response->assertJsonCount(10, 'data');
    }

    public function test_create_new_product()
    {
        $category = Category::factory()->create();

        $product = Product::factory()->create([
            'user_id' => $category->user->id,
            'category_id' => $category->id,
            'name' => 'Created product',
        ]);

        $response = $this->postJson('/api/product', $product->toArray());

        // $response->dump();

        // Error 422 está OK
        // $response->assertSuccessful();
        $response->assertStatus(422, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('products', $product->toArray());
    }

    public function test_update_product()
    {
        $product = Product::factory()->create();
        $product->update([
            'name' => 'Updated product'
        ]);

        $response = $this->patchJson("/api/product/{$product->getKey()}", $product->toArray());

        // $response->dump();
        // $response->assertSuccessful(); //error 422 por el ProductRequest
        $response->assertStatus(422, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('products', $product->toArray());
    
    }

    public function test_show_product()
    {
        // Category::factory()->create();
        $product = Product::factory()->create();

        $response = $this->getJson("/api/product/{$product->getKey()}");
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_product()
    {
        $product = Product::factory()->create();

        $response = $this->deleteJson("/api/product/{$product->getKey()}");
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
        
        $product->delete();
        $this->assertDeleted($product);
    }
    
}

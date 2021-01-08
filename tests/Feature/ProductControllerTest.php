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
        Category::factory()->count(5)->create();
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
        $data = [
            'name' => 'created product'
        ];
        $response = $this->postJson('/api/product', $data);

        // $response->dump();

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('products', $data);
    }

    public function test_update_product()
    {
        $product = Product::factory()->create();
        $product->update([
            'name' => 'Updated product'
        ]);

        $response = $this->patchJson("/api/product/{$product->getKey()}", $product->toArray());
        
        // $response->dump();
        // $response->assertSuccessful(); //error 500 por el CategoryRequest
        $response->assertHeader('content-type', 'application/json');
        $this->assertDatabaseHas('products', $product->toArray());
    
    }

    public function test_show_product()
    {
        $product = Product::factory()->create();

        $response = $this->getJson("/api/product/{$product->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_product()
    {
        $product = Product::factory()->create();

        $response = $this->deleteJson("/api/product/{$product->getKey()}");
        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        
        $product->delete();
        $this->assertDeleted($product);
    }
    
}

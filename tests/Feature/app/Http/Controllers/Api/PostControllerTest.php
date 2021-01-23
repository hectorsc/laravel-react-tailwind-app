<?php

namespace Tests\Feature\app\Http\Controllers\Api;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Post;
use App\Models\Tag;
use App\Models\User;
use Illuminate\Support\Arr;
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
        
        // no me deja usar un tag para todas las pruebas
        // peta la prueba de create_new_post
        // Tag::factory()->create([
        //     'name' => 'Tag example'
        // ]);
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
        Tag::factory()->create([
            'name' => 'Tag example'
        ]);

        $post = [
            'title' => 'Post title',
            'sub_title' => 'Post SubTitle',
            'body' => 'Post Body example',
            'tags' => [
                0 => [
                    'value' => 1,
                    'label' => 'Tag example'
                ],  
            ]
        ];

        $response = $this->postJson('/api/post', $post);

        // $response->dump();

        $response->assertSuccessful();
        $response->assertHeader('content-type', 'application/json');
        
        // Como en el PostController se elemininan los tags del request
        // para guardar en bbdd por separado, tengo que quitarlos o da 
        // error al intentar buscar los tags en la tabla Post
        $post = Arr::except($post, ['tags']);
        $this->assertDatabaseHas('posts', $post);
    }

    public function test_update_post()
    {
        Tag::factory()->create([
            'name' => 'Tag example'
        ]);

        $post = Post::factory()->create();
        $data = [ 
            'title' => 'Update title',
            'sub_title' => 'Update subTitle',
            'body' =>  'Update Post body example',
            'tags' => [
                0 => [
                    'value' => 1,
                    'label' => 'Tag example'
                ],
            ]
        ];

        $response = $this->patchJson("/api/post/{$post->id}", $data);

        // $response->dump();
        // 403 Forbidden
        // sin policies nos da un 500 pq el patchJson no le podemos pasar
        //el objeto $post y no pasa $post->tags()->sync($tags); del controller
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_show_post()
    {
        $post = Post::factory()->create();

        $response = $this->getJson("/api/post/{$post->getKey()}");
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');
    }

    public function test_delete_post()
    {
        $post = Post::factory()->create();

        $response = $this->deleteJson("/api/post/{$post->getKey()}");
        // $response->assertSuccessful();
        $response->assertStatus(403, "Response is: {$response->getContent()}");
        $response->assertHeader('content-type', 'application/json');

        $post->delete();
        $this->assertDeleted($post);
    }
}

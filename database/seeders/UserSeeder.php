<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generamos el usuario principal
        DB::table('users')->insert([
            'name' => 'Héctor',
            'email' => 'hscapel@test.com',
            'password' => Hash::make('12345678')
        ]);

        // Generamos dos users de pruebas
        \App\Models\User::factory(2)->create();
   
    }
}

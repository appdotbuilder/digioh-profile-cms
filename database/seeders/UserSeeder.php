<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Super Admin
        $superAdmin = User::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@digioh.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);
        $superAdmin->roles()->attach(Role::where('name', 'superadmin')->first());

        // Create Admin
        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@digioh.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);
        $admin->roles()->attach(Role::where('name', 'admin')->first());

        // Create Editor
        $editor = User::create([
            'name' => 'Editor User',
            'email' => 'editor@digioh.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);
        $editor->roles()->attach(Role::where('name', 'editor')->first());

        // Create Author
        $author = User::create([
            'name' => 'Author User',
            'email' => 'author@digioh.com',
            'password' => Hash::make('password123'),
            'email_verified_at' => now(),
        ]);
        $author->roles()->attach(Role::where('name', 'author')->first());
    }
}
<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create permissions
        $permissions = [
            // Site Settings
            ['name' => 'view_site_settings', 'display_name' => 'View Site Settings', 'description' => 'Can view site settings'],
            ['name' => 'edit_site_settings', 'display_name' => 'Edit Site Settings', 'description' => 'Can edit site settings'],

            // Services
            ['name' => 'view_services', 'display_name' => 'View Services', 'description' => 'Can view services'],
            ['name' => 'create_services', 'display_name' => 'Create Services', 'description' => 'Can create services'],
            ['name' => 'edit_services', 'display_name' => 'Edit Services', 'description' => 'Can edit services'],
            ['name' => 'delete_services', 'display_name' => 'Delete Services', 'description' => 'Can delete services'],
            ['name' => 'publish_services', 'display_name' => 'Publish Services', 'description' => 'Can publish services'],

            // Portfolio
            ['name' => 'view_portfolio', 'display_name' => 'View Portfolio', 'description' => 'Can view portfolio'],
            ['name' => 'create_portfolio', 'display_name' => 'Create Portfolio', 'description' => 'Can create portfolio items'],
            ['name' => 'edit_portfolio', 'display_name' => 'Edit Portfolio', 'description' => 'Can edit portfolio items'],
            ['name' => 'delete_portfolio', 'display_name' => 'Delete Portfolio', 'description' => 'Can delete portfolio items'],
            ['name' => 'publish_portfolio', 'display_name' => 'Publish Portfolio', 'description' => 'Can publish portfolio items'],

            // Team
            ['name' => 'view_team', 'display_name' => 'View Team', 'description' => 'Can view team members'],
            ['name' => 'create_team', 'display_name' => 'Create Team', 'description' => 'Can create team members'],
            ['name' => 'edit_team', 'display_name' => 'Edit Team', 'description' => 'Can edit team members'],
            ['name' => 'delete_team', 'display_name' => 'Delete Team', 'description' => 'Can delete team members'],

            // Client Logos
            ['name' => 'view_clients', 'display_name' => 'View Clients', 'description' => 'Can view client logos'],
            ['name' => 'create_clients', 'display_name' => 'Create Clients', 'description' => 'Can create client logos'],
            ['name' => 'edit_clients', 'display_name' => 'Edit Clients', 'description' => 'Can edit client logos'],
            ['name' => 'delete_clients', 'display_name' => 'Delete Clients', 'description' => 'Can delete client logos'],

            // Blog Posts
            ['name' => 'view_blog', 'display_name' => 'View Blog', 'description' => 'Can view blog posts'],
            ['name' => 'create_blog', 'display_name' => 'Create Blog', 'description' => 'Can create blog posts'],
            ['name' => 'edit_blog', 'display_name' => 'Edit Blog', 'description' => 'Can edit blog posts'],
            ['name' => 'delete_blog', 'display_name' => 'Delete Blog', 'description' => 'Can delete blog posts'],
            ['name' => 'publish_blog', 'display_name' => 'Publish Blog', 'description' => 'Can publish blog posts'],

            // Contact Messages
            ['name' => 'view_messages', 'display_name' => 'View Messages', 'description' => 'Can view contact messages'],
            ['name' => 'delete_messages', 'display_name' => 'Delete Messages', 'description' => 'Can delete contact messages'],

            // User Management
            ['name' => 'view_users', 'display_name' => 'View Users', 'description' => 'Can view users'],
            ['name' => 'create_users', 'display_name' => 'Create Users', 'description' => 'Can create users'],
            ['name' => 'edit_users', 'display_name' => 'Edit Users', 'description' => 'Can edit users'],
            ['name' => 'delete_users', 'display_name' => 'Delete Users', 'description' => 'Can delete users'],

            // Role Management
            ['name' => 'view_roles', 'display_name' => 'View Roles', 'description' => 'Can view roles'],
            ['name' => 'create_roles', 'display_name' => 'Create Roles', 'description' => 'Can create roles'],
            ['name' => 'edit_roles', 'display_name' => 'Edit Roles', 'description' => 'Can edit roles'],
            ['name' => 'delete_roles', 'display_name' => 'Delete Roles', 'description' => 'Can delete roles'],

            // Media Library
            ['name' => 'view_media', 'display_name' => 'View Media', 'description' => 'Can view media library'],
            ['name' => 'upload_media', 'display_name' => 'Upload Media', 'description' => 'Can upload media'],
            ['name' => 'delete_media', 'display_name' => 'Delete Media', 'description' => 'Can delete media'],
        ];

        foreach ($permissions as $permission) {
            Permission::create($permission);
        }

        // Create roles
        $superAdmin = Role::create([
            'name' => 'superadmin',
            'display_name' => 'Super Admin',
            'description' => 'Full system access, manages all users and roles'
        ]);

        $admin = Role::create([
            'name' => 'admin',
            'display_name' => 'Admin',
            'description' => 'Manages all collections except user/role management'
        ]);

        $editor = Role::create([
            'name' => 'editor',
            'display_name' => 'Editor',
            'description' => 'Edits and publishes content (Services, Portfolio, Team, Clients)'
        ]);

        $author = Role::create([
            'name' => 'author',
            'display_name' => 'Author',
            'description' => 'Creates drafts only'
        ]);

        // Assign permissions to roles
        
        // Super Admin gets all permissions
        $superAdmin->permissions()->attach(Permission::all());

        // Admin gets all permissions except user/role management
        $adminPermissions = Permission::whereNotIn('name', [
            'view_users', 'create_users', 'edit_users', 'delete_users',
            'view_roles', 'create_roles', 'edit_roles', 'delete_roles'
        ])->get();
        $admin->permissions()->attach($adminPermissions);

        // Editor gets content management permissions
        $editorPermissions = Permission::whereIn('name', [
            'view_site_settings',
            'view_services', 'create_services', 'edit_services', 'publish_services',
            'view_portfolio', 'create_portfolio', 'edit_portfolio', 'publish_portfolio',
            'view_team', 'create_team', 'edit_team',
            'view_clients', 'create_clients', 'edit_clients',
            'view_blog', 'create_blog', 'edit_blog', 'publish_blog',
            'view_messages',
            'view_media', 'upload_media'
        ])->get();
        $editor->permissions()->attach($editorPermissions);

        // Author gets basic content creation permissions
        $authorPermissions = Permission::whereIn('name', [
            'view_services', 'create_services', 'edit_services',
            'view_portfolio', 'create_portfolio', 'edit_portfolio',
            'view_team', 'create_team', 'edit_team',
            'view_clients', 'create_clients', 'edit_clients',
            'view_blog', 'create_blog', 'edit_blog',
            'view_media', 'upload_media'
        ])->get();
        $author->permissions()->attach($authorPermissions);
    }
}
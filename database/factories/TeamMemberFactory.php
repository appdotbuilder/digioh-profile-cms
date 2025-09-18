<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TeamMember>
 */
class TeamMemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'role_title' => fake()->jobTitle(),
            'photo' => 'team/member-' . fake()->numberBetween(1, 10) . '.jpg',
            'bio' => fake()->paragraphs(random_int(2, 3), true),
            'social_links' => [
                'linkedin' => fake()->optional()->url(),
                'twitter' => fake()->optional()->url(),
                'instagram' => fake()->optional()->url(),
            ],
            'order' => fake()->numberBetween(1, 100),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }

    /**
     * Indicate that the team member is active.
     */
    public function active(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'active',
        ]);
    }
}
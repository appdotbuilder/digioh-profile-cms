<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BlogPost>
 */
class BlogPostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(random_int(4, 8));
        
        return [
            'title' => rtrim($title, '.'),
            'slug' => Str::slug($title),
            'excerpt' => fake()->sentence(random_int(15, 25)),
            'content' => fake()->paragraphs(random_int(5, 10), true),
            'cover_image' => 'blog/blog-' . fake()->numberBetween(1, 10) . '.jpg',
            'tags' => fake()->randomElements(['technology', 'events', 'weddings', 'tips', 'behind-the-scenes', 'equipment', 'lighting', 'audio'], random_int(2, 4)),
            'author_id' => User::factory(),
            'published_at' => fake()->optional(70)->dateTimeBetween('-6 months', 'now'), // 70% chance of being published
            'status' => fake()->randomElement(['draft', 'published']),
            'seo_title' => rtrim($title, '.') . ' - digiOH Blog',
            'seo_description' => fake()->sentence(random_int(15, 25)),
            'seo_keywords' => fake()->words(random_int(5, 10), true),
        ];
    }

    /**
     * Indicate that the blog post is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => fake()->dateTimeBetween('-6 months', 'now'),
        ]);
    }
}
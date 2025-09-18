<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Portfolio>
 */
class PortfolioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->words(random_int(2, 4), true);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'category' => fake()->randomElement(['Events', 'Weddings', 'Signage', 'Rental']),
            'date' => fake()->dateTimeBetween('-2 years', 'now'),
            'client_name' => fake()->company(),
            'description' => fake()->paragraphs(random_int(2, 4), true),
            'media' => fake()->randomElements([
                'portfolio/portfolio1.jpg',
                'portfolio/portfolio2.jpg',
                'portfolio/portfolio3.jpg',
                'portfolio/portfolio4.jpg',
                'portfolio/portfolio5.jpg',
            ], random_int(3, 5)),
            'cover_image' => 'portfolio/cover-' . fake()->numberBetween(1, 10) . '.jpg',
            'featured' => fake()->boolean(30), // 30% chance of being featured
            'status' => fake()->randomElement(['draft', 'published']),
            'order' => fake()->numberBetween(1, 100),
            'seo_title' => $title . ' - Portfolio - digiOH',
            'seo_description' => fake()->sentence(random_int(15, 25)),
            'seo_keywords' => fake()->words(random_int(5, 10), true),
        ];
    }

    /**
     * Indicate that the portfolio item is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
        ]);
    }

    /**
     * Indicate that the portfolio item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'featured' => true,
        ]);
    }
}
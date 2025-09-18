<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Service>
 */
class ServiceFactory extends Factory
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
            'icon' => fake()->randomElement(['camera', 'microphone', 'projector', 'stage', 'lights']),
            'short_description' => fake()->sentence(random_int(10, 20)),
            'long_description' => fake()->paragraphs(random_int(3, 5), true),
            'gallery' => fake()->randomElements([
                'services/service1.jpg',
                'services/service2.jpg',
                'services/service3.jpg',
                'services/service4.jpg',
            ], random_int(2, 4)),
            'status' => fake()->randomElement(['draft', 'published']),
            'order' => fake()->numberBetween(1, 100),
            'seo_title' => $title . ' - digiOH',
            'seo_description' => fake()->sentence(random_int(15, 25)),
            'seo_keywords' => fake()->words(random_int(5, 10), true),
        ];
    }

    /**
     * Indicate that the service is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
        ]);
    }
}
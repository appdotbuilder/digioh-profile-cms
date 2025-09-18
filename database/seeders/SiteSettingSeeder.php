<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use Illuminate\Database\Seeder;

class SiteSettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            // Company Information
            ['key' => 'company_name', 'value' => 'digiOH', 'type' => 'text', 'group' => 'company'],
            ['key' => 'company_tagline', 'value' => 'Creating Unforgettable Experiences', 'type' => 'text', 'group' => 'company'],
            ['key' => 'company_description', 'value' => 'DigiOH is a premier event production company specializing in audio-visual services, lighting design, and technical support for corporate events, weddings, and special occasions.', 'type' => 'textarea', 'group' => 'company'],
            ['key' => 'company_address', 'value' => '123 Event Street, Production City, PC 12345', 'type' => 'textarea', 'group' => 'company'],
            ['key' => 'company_phone', 'value' => '+1 (555) 123-4567', 'type' => 'text', 'group' => 'company'],
            ['key' => 'company_email', 'value' => 'info@digioh.com', 'type' => 'text', 'group' => 'company'],
            ['key' => 'company_whatsapp', 'value' => '+15551234567', 'type' => 'text', 'group' => 'company'],

            // Site Assets
            ['key' => 'site_logo', 'value' => '/images/logo.svg', 'type' => 'image', 'group' => 'general'],
            ['key' => 'site_favicon', 'value' => '/favicon.ico', 'type' => 'image', 'group' => 'general'],
            ['key' => 'hero_video', 'value' => '/videos/hero-video.mp4', 'type' => 'text', 'group' => 'general'],

            // Social Media
            ['key' => 'social_facebook', 'value' => 'https://facebook.com/digioh', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_instagram', 'value' => 'https://instagram.com/digioh', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_twitter', 'value' => 'https://twitter.com/digioh', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_linkedin', 'value' => 'https://linkedin.com/company/digioh', 'type' => 'text', 'group' => 'social'],
            ['key' => 'social_youtube', 'value' => 'https://youtube.com/digioh', 'type' => 'text', 'group' => 'social'],

            // SEO Defaults
            ['key' => 'seo_title', 'value' => 'digiOH - Professional Event Production & Audio-Visual Services', 'type' => 'text', 'group' => 'seo'],
            ['key' => 'seo_description', 'value' => 'Premier event production company specializing in audio-visual services, lighting design, and technical support for corporate events, weddings, and special occasions. 500+ successful events since 2015.', 'type' => 'textarea', 'group' => 'seo'],
            ['key' => 'seo_keywords', 'value' => 'event production, audio visual, lighting design, wedding AV, corporate events, sound system rental, lighting rental, event technology', 'type' => 'text', 'group' => 'seo'],

            // Statistics
            ['key' => 'events_completed', 'value' => '500', 'type' => 'text', 'group' => 'stats'],
            ['key' => 'years_experience', 'value' => '9', 'type' => 'text', 'group' => 'stats'],
            ['key' => 'established_year', 'value' => '2015', 'type' => 'text', 'group' => 'stats'],

            // Contact Form Settings
            ['key' => 'contact_recipient', 'value' => 'info@digioh.com', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'contact_cc', 'value' => '', 'type' => 'text', 'group' => 'contact'],
            ['key' => 'contact_subject', 'value' => 'New Contact Form Submission - digiOH', 'type' => 'text', 'group' => 'contact'],

            // Map Settings
            ['key' => 'google_maps_api_key', 'value' => '', 'type' => 'text', 'group' => 'general'],
            ['key' => 'map_latitude', 'value' => '40.7128', 'type' => 'text', 'group' => 'general'],
            ['key' => 'map_longitude', 'value' => '-74.0060', 'type' => 'text', 'group' => 'general'],
        ];

        foreach ($settings as $setting) {
            SiteSetting::create($setting);
        }
    }
}
<?php

namespace Database\Seeders;

use App\Models\ClientLogo;
use App\Models\Portfolio;
use App\Models\Service;
use App\Models\TeamMember;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ContentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Services
        $services = [
            [
                'title' => 'Audio Visual Production',
                'slug' => 'audio-visual-production',
                'icon' => 'microphone',
                'short_description' => 'Professional sound systems, microphones, and audio mixing for crystal-clear event audio.',
                'long_description' => 'Our comprehensive audio-visual production services ensure your event sounds and looks perfect. We provide state-of-the-art sound systems, wireless microphones, mixing boards, and professional audio technicians. From intimate gatherings to large-scale productions, we have the equipment and expertise to deliver exceptional audio quality that keeps your audience engaged.',
                'status' => 'published',
                'order' => 1,
            ],
            [
                'title' => 'Lighting Design & Rental',
                'slug' => 'lighting-design-rental',
                'icon' => 'lights',
                'short_description' => 'Creative lighting solutions that transform your venue and create the perfect ambiance.',
                'long_description' => 'Transform your event space with our professional lighting design and rental services. Our team of lighting designers works closely with you to create the perfect atmosphere for your occasion. We offer LED uplighting, spotlights, string lights, gobos, and intelligent lighting systems. Whether you need romantic ambiance for a wedding or dynamic lighting for a corporate presentation, we bring your vision to life.',
                'status' => 'published',
                'order' => 2,
            ],
            [
                'title' => 'Event Technology Solutions',
                'slug' => 'event-technology-solutions',
                'icon' => 'projector',
                'short_description' => 'Cutting-edge presentation technology including projectors, screens, and live streaming.',
                'long_description' => 'Stay ahead with our advanced event technology solutions. We provide high-resolution projectors, large format screens, interactive displays, and live streaming capabilities. Our technology services are perfect for corporate presentations, product launches, conferences, and hybrid events. We handle all technical aspects so you can focus on your content and audience engagement.',
                'status' => 'published',
                'order' => 3,
            ],
            [
                'title' => 'Stage & Staging Solutions',
                'slug' => 'stage-staging-solutions',
                'icon' => 'stage',
                'short_description' => 'Professional staging platforms and backdrops to elevate your event presentation.',
                'long_description' => 'Create a commanding presence with our professional staging solutions. We offer modular stage platforms, custom backdrops, pipe and drape systems, and professional staging accessories. Our staging services are perfect for keynote presentations, award ceremonies, concerts, and theatrical performances. All stages are professionally installed and meet safety standards.',
                'status' => 'published',
                'order' => 4,
            ],
            [
                'title' => 'Wedding AV Packages',
                'slug' => 'wedding-av-packages',
                'icon' => 'camera',
                'short_description' => 'Complete audio-visual packages tailored specifically for your special wedding day.',
                'long_description' => 'Make your wedding day unforgettable with our specialized wedding AV packages. We understand that every wedding is unique, which is why we offer customizable packages that include ceremony sound systems, reception audio, dance lighting, uplighting, and coordination with your other vendors. Our experienced wedding technicians ensure everything runs smoothly so you can focus on celebrating your special day.',
                'status' => 'published',
                'order' => 5,
            ],
        ];

        foreach ($services as $service) {
            Service::create(array_merge($service, [
                'seo_title' => $service['title'] . ' - digiOH',
                'seo_description' => $service['short_description'],
                'seo_keywords' => Str::slug($service['title']) . ', event services, digioh',
            ]));
        }

        // Create Portfolio Items
        $portfolioItems = [
            [
                'title' => 'Grand Corporate Conference 2024',
                'slug' => 'grand-corporate-conference-2024',
                'category' => 'Events',
                'date' => '2024-03-15',
                'client_name' => 'Tech Innovations Inc.',
                'description' => 'A comprehensive three-day corporate conference featuring multiple breakout sessions, keynote presentations, and networking events. We provided full AV production including multiple screen setups, wireless presentation systems, and professional audio throughout the venue.',
                'featured' => true,
                'status' => 'published',
                'order' => 1,
            ],
            [
                'title' => 'Elegant Garden Wedding',
                'slug' => 'elegant-garden-wedding',
                'category' => 'Weddings',
                'date' => '2024-02-14',
                'client_name' => 'Sarah & Michael Johnson',
                'description' => 'A beautiful outdoor garden wedding celebration with romantic lighting design and crystal-clear ceremony audio. Featured uplighting throughout the reception area and professional DJ services for the evening festivities.',
                'featured' => true,
                'status' => 'published',
                'order' => 2,
            ],
            [
                'title' => 'Product Launch Spectacular',
                'slug' => 'product-launch-spectacular',
                'category' => 'Events',
                'date' => '2024-01-20',
                'client_name' => 'Innovation Corp',
                'description' => 'High-energy product launch event with dynamic lighting effects, large format video displays, and interactive presentation technology. Created an immersive experience that perfectly showcased the client\'s new product line.',
                'featured' => false,
                'status' => 'published',
                'order' => 3,
            ],
            [
                'title' => 'Custom Venue Signage Solutions',
                'slug' => 'custom-venue-signage-solutions',
                'category' => 'Signage',
                'date' => '2024-01-10',
                'client_name' => 'Metro Convention Center',
                'description' => 'Comprehensive digital signage installation including wayfinding displays, event information screens, and interactive kiosks. Improved visitor experience and reduced staff workload through intuitive digital solutions.',
                'featured' => false,
                'status' => 'published',
                'order' => 4,
            ],
            [
                'title' => 'Premium Audio Equipment Rental',
                'slug' => 'premium-audio-equipment-rental',
                'category' => 'Rental',
                'date' => '2023-12-15',
                'client_name' => 'Festival Productions LLC',
                'description' => 'Large-scale audio equipment rental for a multi-day music festival. Provided line arrays, mixing consoles, wireless systems, and on-site technical support throughout the event duration.',
                'featured' => false,
                'status' => 'published',
                'order' => 5,
            ],
            [
                'title' => 'Intimate Wedding Reception',
                'slug' => 'intimate-wedding-reception',
                'category' => 'Weddings',
                'date' => '2023-11-25',
                'client_name' => 'Emma & David Wilson',
                'description' => 'Cozy indoor wedding reception with warm ambient lighting and personal audio setup for speeches and background music. Created the perfect atmosphere for an intimate celebration with close family and friends.',
                'featured' => false,
                'status' => 'published',
                'order' => 6,
            ],
            [
                'title' => 'Trade Show Display Solutions',
                'slug' => 'trade-show-display-solutions',
                'category' => 'Signage',
                'date' => '2023-10-30',
                'client_name' => 'ExpoTech Solutions',
                'description' => 'Complete trade show booth setup with LED video walls, interactive displays, and professional lighting. Helped our client stand out from the competition with eye-catching visual presentations.',
                'featured' => false,
                'status' => 'published',
                'order' => 7,
            ],
            [
                'title' => 'Concert Stage Production',
                'slug' => 'concert-stage-production',
                'category' => 'Events',
                'date' => '2023-09-22',
                'client_name' => 'Local Arts Foundation',
                'description' => 'Full concert production including professional stage setup, lighting design, and front-of-house audio mixing. Supported local musicians with top-tier production values for their annual fundraising concert.',
                'featured' => true,
                'status' => 'published',
                'order' => 8,
            ],
        ];

        foreach ($portfolioItems as $item) {
            Portfolio::create(array_merge($item, [
                'seo_title' => $item['title'] . ' - Portfolio - digiOH',
                'seo_description' => substr($item['description'], 0, 155),
                'seo_keywords' => $item['category'] . ', ' . strtolower(str_replace(' ', ', ', $item['title'])),
            ]));
        }

        // Create Team Members
        $teamMembers = [
            [
                'name' => 'Alex Rodriguez',
                'role_title' => 'Founder & CEO',
                'bio' => 'With over 15 years of experience in event production, Alex founded digiOH with a vision to revolutionize the audio-visual industry. His passion for technology and attention to detail ensures every event exceeds expectations.',
                'order' => 1,
                'status' => 'active',
            ],
            [
                'name' => 'Sarah Thompson',
                'role_title' => 'Creative Director',
                'bio' => 'Sarah brings artistic vision and technical expertise to every project. With a background in theatrical lighting design, she creates stunning visual experiences that perfectly complement each event\'s unique atmosphere.',
                'order' => 2,
                'status' => 'active',
            ],
            [
                'name' => 'Mike Chen',
                'role_title' => 'Senior Audio Engineer',
                'bio' => 'Mike is our audio specialist with expertise in both live sound and studio production. His meticulous approach to sound design ensures crystal-clear audio quality for every event, from intimate gatherings to large productions.',
                'order' => 3,
                'status' => 'active',
            ],
            [
                'name' => 'Jessica Martinez',
                'role_title' => 'Event Coordinator',
                'bio' => 'Jessica manages the logistics and coordination for all our events. Her organizational skills and attention to detail ensure smooth execution from planning through completion, making her invaluable to our team.',
                'order' => 4,
                'status' => 'active',
            ],
            [
                'name' => 'David Park',
                'role_title' => 'Lighting Technician',
                'bio' => 'David specializes in lighting installation and operation. His technical knowledge and creative eye help transform venues into spectacular spaces that enhance the overall event experience.',
                'order' => 5,
                'status' => 'active',
            ],
            [
                'name' => 'Lisa Johnson',
                'role_title' => 'Client Relations Manager',
                'bio' => 'Lisa is the friendly face that guides clients through their event planning journey. Her excellent communication skills and industry knowledge help ensure every client\'s vision becomes reality.',
                'order' => 6,
                'status' => 'active',
            ],
        ];

        foreach ($teamMembers as $member) {
            TeamMember::create($member);
        }

        // Create Client Logos
        $clients = [
            ['name' => 'TechCorp Industries', 'order' => 1, 'status' => 'active'],
            ['name' => 'Metro Hotels Group', 'order' => 2, 'status' => 'active'],
            ['name' => 'Creative Agency Plus', 'order' => 3, 'status' => 'active'],
            ['name' => 'Global Events LLC', 'order' => 4, 'status' => 'active'],
            ['name' => 'Luxury Weddings Co', 'order' => 5, 'status' => 'active'],
            ['name' => 'Innovation Summit', 'order' => 6, 'status' => 'active'],
        ];

        foreach ($clients as $client) {
            ClientLogo::create(array_merge($client, [
                'image' => 'clients/' . Str::slug($client['name']) . '.png',
                'url' => null,
            ]));
        }
    }
}
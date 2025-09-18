<?php

namespace App\Http\Controllers;

use App\Models\ClientLogo;
use App\Models\Portfolio;
use App\Models\Service;
use App\Models\SiteSetting;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index(): Response
    {
        // Get featured services (limit to 3)
        $services = Service::published()
            ->orderBy('order')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'icon', 'short_description']);

        // Get featured portfolio items (limit to 6)
        $portfolioItems = Portfolio::published()
            ->featured()
            ->orderBy('order')
            ->limit(6)
            ->get(['id', 'title', 'slug', 'category', 'cover_image', 'client_name', 'date']);

        // Get active client logos
        $clientLogos = ClientLogo::active()
            ->orderBy('order')
            ->get(['name', 'image', 'url']);

        // Get site settings
        $companyName = SiteSetting::get('company_name', 'digiOH');
        $tagline = SiteSetting::get('company_tagline', 'Creating Unforgettable Experiences');
        $eventsCompleted = SiteSetting::get('events_completed', '500');
        $establishedYear = SiteSetting::get('established_year', '2015');
        $heroVideo = SiteSetting::get('hero_video');

        return Inertia::render('home', [
            'services' => $services,
            'portfolioItems' => $portfolioItems,
            'clientLogos' => $clientLogos,
            'companyName' => $companyName,
            'tagline' => $tagline,
            'eventsCompleted' => $eventsCompleted,
            'establishedYear' => $establishedYear,
            'heroVideo' => $heroVideo,
        ]);
    }
}
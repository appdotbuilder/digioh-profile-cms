<?php

namespace App\Http\Controllers;

use App\Models\SiteSetting;
use App\Models\TeamMember;
use Inertia\Inertia;
use Inertia\Response;

class AboutController extends Controller
{
    /**
     * Display the about page.
     */
    public function index(): Response
    {
        // Get active team members
        $teamMembers = TeamMember::active()
            ->orderBy('order')
            ->get(['name', 'role_title', 'photo', 'bio', 'social_links']);

        // Get company information from site settings
        $companyName = SiteSetting::get('company_name', 'digiOH');
        $companyDescription = SiteSetting::get('company_description');
        $companyAddress = SiteSetting::get('company_address');
        $establishedYear = SiteSetting::get('established_year', '2015');
        $eventsCompleted = SiteSetting::get('events_completed', '500');
        $mapLatitude = SiteSetting::get('map_latitude', '40.7128');
        $mapLongitude = SiteSetting::get('map_longitude', '-74.0060');

        return Inertia::render('about', [
            'teamMembers' => $teamMembers,
            'companyName' => $companyName,
            'companyDescription' => $companyDescription,
            'companyAddress' => $companyAddress,
            'establishedYear' => $establishedYear,
            'eventsCompleted' => $eventsCompleted,
            'mapLatitude' => (float) $mapLatitude,
            'mapLongitude' => (float) $mapLongitude,
        ]);
    }
}
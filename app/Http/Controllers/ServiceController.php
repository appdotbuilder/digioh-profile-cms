<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class ServiceController extends Controller
{
    /**
     * Display a listing of the services.
     */
    public function index(): Response
    {
        $services = Service::published()
            ->orderBy('order')
            ->get(['id', 'title', 'slug', 'icon', 'short_description']);

        return Inertia::render('services/index', [
            'services' => $services,
        ]);
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service): Response
    {
        if ($service->status !== 'published') {
            abort(404);
        }

        // Get related services (exclude current service)
        $relatedServices = Service::published()
            ->where('id', '!=', $service->id)
            ->orderBy('order')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'icon', 'short_description']);

        return Inertia::render('services/show', [
            'service' => $service->only([
                'title', 'slug', 'icon', 'short_description', 
                'long_description', 'gallery', 'seo_title', 'seo_description'
            ]),
            'relatedServices' => $relatedServices,
        ]);
    }
}
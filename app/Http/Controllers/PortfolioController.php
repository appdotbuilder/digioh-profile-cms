<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the portfolio items.
     */
    public function index(Request $request): Response
    {
        $query = Portfolio::published()->orderBy('order');

        // Filter by category if provided
        if ($request->filled('category')) {
            $query->where('category', $request->category);
        }

        $portfolioItems = $query->get([
            'id', 'title', 'slug', 'category', 'date', 
            'client_name', 'cover_image', 'featured'
        ]);

        // Get available categories
        $categories = Portfolio::published()
            ->distinct()
            ->pluck('category')
            ->sort()
            ->values();

        return Inertia::render('portfolio/index', [
            'portfolioItems' => $portfolioItems,
            'categories' => $categories,
            'selectedCategory' => $request->category,
        ]);
    }

    /**
     * Display the specified portfolio item.
     */
    public function show(Portfolio $portfolio): Response
    {
        if ($portfolio->status !== 'published') {
            abort(404);
        }

        // Get related portfolio items (same category, exclude current)
        $relatedItems = Portfolio::published()
            ->where('category', $portfolio->category)
            ->where('id', '!=', $portfolio->id)
            ->orderBy('order')
            ->limit(3)
            ->get(['id', 'title', 'slug', 'category', 'cover_image', 'client_name', 'date']);

        return Inertia::render('portfolio/show', [
            'portfolioItem' => $portfolio->only([
                'title', 'slug', 'category', 'date', 'client_name',
                'description', 'media', 'cover_image', 'seo_title', 'seo_description'
            ]),
            'relatedItems' => $relatedItems,
        ]);
    }
}
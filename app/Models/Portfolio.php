<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\Portfolio
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string $category
 * @property \Illuminate\Support\Carbon $date
 * @property string $client_name
 * @property string $description
 * @property array|null $media
 * @property string|null $cover_image
 * @property bool $featured
 * @property string $status
 * @property int $order
 * @property string|null $seo_title
 * @property string|null $seo_description
 * @property string|null $seo_keywords
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio query()
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio published()
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio featured()
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereClientName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereCoverImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereFeatured($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereMedia($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereSeoDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereSeoKeywords($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereSeoTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Portfolio whereUpdatedAt($value)
 * @method static \Database\Factories\PortfolioFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Portfolio extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'portfolio';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'category',
        'date',
        'client_name',
        'description',
        'media',
        'cover_image',
        'featured',
        'status',
        'order',
        'seo_title',
        'seo_description',
        'seo_keywords',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'date' => 'date',
        'media' => 'array',
        'featured' => 'boolean',
    ];

    /**
     * Scope a query to only include published portfolio items.
     */
    public function scopePublished(Builder $query): void
    {
        $query->where('status', 'published');
    }

    /**
     * Scope a query to only include featured portfolio items.
     */
    public function scopeFeatured(Builder $query): void
    {
        $query->where('featured', true);
    }
}
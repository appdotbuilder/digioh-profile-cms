<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\Service
 *
 * @property int $id
 * @property string $title
 * @property string $slug
 * @property string|null $icon
 * @property string $short_description
 * @property string $long_description
 * @property array|null $gallery
 * @property string $status
 * @property int $order
 * @property string|null $seo_title
 * @property string|null $seo_description
 * @property string|null $seo_keywords
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Service newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Service query()
 * @method static \Illuminate\Database\Eloquent\Builder|Service published()
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereGallery($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereIcon($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereLongDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereSeoDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereSeoKeywords($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereSeoTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereShortDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Service whereUpdatedAt($value)
 * @method static \Database\Factories\ServiceFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Service extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'slug',
        'icon',
        'short_description',
        'long_description',
        'gallery',
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
        'gallery' => 'array',
    ];

    /**
     * Scope a query to only include published services.
     */
    public function scopePublished(Builder $query): void
    {
        $query->where('status', 'published');
    }
}
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\ClientLogo
 *
 * @property int $id
 * @property string $name
 * @property string $image
 * @property string|null $url
 * @property int $order
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo query()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo active()
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ClientLogo whereUrl($value)
 * @method static \Database\Factories\ClientLogoFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class ClientLogo extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'image',
        'url',
        'order',
        'status',
    ];

    /**
     * Scope a query to only include active client logos.
     */
    public function scopeActive(Builder $query): void
    {
        $query->where('status', 'active');
    }
}
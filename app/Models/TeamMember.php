<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\TeamMember
 *
 * @property int $id
 * @property string $name
 * @property string $role_title
 * @property string|null $photo
 * @property string $bio
 * @property array|null $social_links
 * @property int $order
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember query()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember active()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereBio($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereOrder($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereRoleTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereSocialLinks($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamMember whereUpdatedAt($value)
 * @method static \Database\Factories\TeamMemberFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class TeamMember extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'role_title',
        'photo',
        'bio',
        'social_links',
        'order',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'social_links' => 'array',
    ];

    /**
     * Scope a query to only include active team members.
     */
    public function scopeActive(Builder $query): void
    {
        $query->where('status', 'active');
    }
}
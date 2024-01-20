<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'movie_name',
        'category',
        'release_date',
        'studio',
        'available_language',
        'rating',
        'description',
        'keywords',
        'thumbnail',
        'video',
        'cast',
        'seo_title',
        'seo_description',
        'd_name',
        'd_photo',
        'm_name',
        'm_photo',
        'status',
        'premium',
        'views',
        'likes',
        'unlikes',
    ];
    public function getRouteKeyName()
    {
        return 'id'; // Replace with your actual primary key name
    }
}

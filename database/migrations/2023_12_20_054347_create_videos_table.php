<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('movie_name');
            $table->string('category')->nullable();
            $table->string('release_date')->nullable();
            $table->string('studio')->nullable();
            $table->string('available_language')->nullable();
            $table->string('rating')->nullable();
            $table->longText('description');
            $table->mediumText('keywords');
            $table->longText('thumbnail')->nullable();
            $table->longText('video');
            $table->string('cast')->nullable();
            $table->string('seo_title')->nullable();
            $table->longText('seo_description')->nullable();
            $table->string('d_name')->nullable();
            $table->string('d_photo')->nullable();
            $table->string('m_name')->nullable();
            $table->string('m_photo')->nullable();
            $table->string('status')->nullable();
            $table->string('premium')->default(false);
            $table->string('views')->nullable();
            $table->string('likes')->nullable();
            $table->string('unlikes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};

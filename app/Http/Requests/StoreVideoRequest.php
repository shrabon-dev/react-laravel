<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVideoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' =>['required'],
            'name' =>['required'],
            'category' =>['nullable'],
            'actress' =>['nullable'],
            'producer' =>['nullable'],
            'release_date' =>['required'],
            'studio' =>['nullable'],
            'thumbnail' =>['nullable'],
            'description' =>['required'],
            'views' =>['nullable'],
            'video' =>['required|mimes:mp4,mov,avi,wmv|max:102400'],
            'likes' =>['nullable'],
            'unlikes' =>['nullable'],
            'keywords' =>['required','regex:/^([^,]+,){0,9}[^,]+$/'],
            'seo_title' =>['nullable'],
            'seo_description' =>['nullable'],
        ];
    }
}

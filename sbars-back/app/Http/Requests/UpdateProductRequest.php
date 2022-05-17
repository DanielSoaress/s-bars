<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules($id)
    {
        return [
            'cod_produto' => ['required', 'string'],
            'nom_produto' => ['required', 'string'],
            'des_produto' => ['required', 'string'],
            'val_produto' => ['required', 'numeric', 'digits_between:1,2'],
        ];
    }
}

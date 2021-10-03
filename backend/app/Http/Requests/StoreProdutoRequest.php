<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProdutoRequest extends FormRequest
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
    public function rules()
    {
        return [
            'cod_produto' => ['required', 'string', 'unique:produtos'],
            'nom_produto' => ['required', 'string', 'unique:produtos'],
            'des_produto' => ['required'],
            'val_produto' => ['required'],
        ];
    }
}

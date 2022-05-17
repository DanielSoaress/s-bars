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

    public function messages() {
        return [
            'cod_produto.required' => 'Código do produto é obrigatório.',
            'cod_produto.unique:produtos' => 'Código do produto já cadastrado.',
            'nom_produto.required' => 'Nome do produto é obrigatório.',
            'nom_produto.unique:produtos' => 'Nome do produto já cadastrado.',
            'des_produto.required' => 'Descrição do produto é obrigatório.',
            'val_produto.required' => 'Valor do produto é obrigatório.',
        ];
    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFuncionarioRequest extends FormRequest
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
            'nom_func' => ['required', 'string'],
            'tel_func' => ['required', 'string'],
            'end_func' => ['sometimes', 'string'],
            'niver_func' => ['required'],
        ];
    }

    public function messages() {
        return [
            'nom_cliente.required' => 'Nome do cliente é obrigatório.',
            'tel_cliente.required' => 'Telefone do cliente é obrigatório.',
            'end_cliente.required' => 'Endereço do cliente é obrigatório.',
            'niver_cliente.required' => 'Aniversário do cliente é obrigatório.',
        ];
    }
}

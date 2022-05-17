<?php

namespace App\Repositories;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Exception;
use App\Utils\Format;

abstract class BaseRepository
{
    protected $model;
    protected $sortBy;
    protected $propertiesToSearch;

    public function __construct()
    {
        $this->model = app($this->model);
    }


    public function listar($porPagina = 5, $direcao = null, $ordenarPor = null, $criterioBusca = null, $filtros = null): array
    {
        $consulta = $this->model
            ->orderBy(
                $ordenarPor ?? $this->sortBy,
                $direcao == 'descending' ? 'desc' : 'asc'
            );

        if (isset($filtros)) {
            collect(array_keys((array)json_decode($filtros)))->map(function ($column, $key) use ($consulta, $filtros) {
                if ($column == 'flg_habilitado' && is_bool(array_values((array)json_decode($filtros))[$key])) {
                    return  $consulta->where($column, '=', array_values((array)json_decode($filtros))[$key]);
                }
                return  $consulta->where($column, 'LIKE', "%" . array_values((array)json_decode($filtros))[$key] . "%");
            })->reject(function ($column) {
                return empty($column);
            });
        }

        if ($criterioBusca) {
            foreach ($this->propertiesToSearch as $key => $propriedade) {
                if ($key == 0) {
                    $consulta->where($propriedade, 'LIKE', "%$criterioBusca%");
                } else {
                    $consulta->orWhere($propriedade, 'LIKE', "%$criterioBusca%");
                }
            }
        }

        $result = $consulta->paginate((int) $porPagina, $this->listFields(),  'current_page');

        return [
            "current_page" => $result->currentPage(),
            "data" => $result->getCollection(),
            "per_page" => $result->perPage(),
            "total" => $result->total(),
            "search" => $criterioBusca,
            "filters" => json_decode($filtros),
            "order" => $direcao,
            "sort" => $ordenarPor ?? $this->sortBy,
        ];
    }

    public function cadastrar(Request $request)
    {
        try {
            foreach ($this->model->getFillable() as $value) {
                $this->model[$value] = $request[$value];
            }
            $this->model->create($this->model->getAttributes());
            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function editar(string $id, Request $request)
    {
        try {
            $model = $this->model->find($id);
            $form = $request->all();

            if ($model->fill($form)->getAttributes() != $model->getRawOriginal()) {
                $model->fill($form)->save();
            }

            return $model;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function excluir(string $id)
    {
        try {
            $result = $this->model->findOrFail($id);
            $result->delete();

            return true;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function buscarPor($column, $value)
    {
        try {
            $query = $this->model->where($column, '=', $value)->first();

            return  $query;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function options($porPagina = 5)
    {
        return [
            "current_page" => 1,
            "data" =>  [],
            "per_page" => (int) $porPagina,
            "total" => null,
            "total" => 0,
            "search" => '',
            "order" => '',
            "sort" => 'asc'
        ];
    }

    public function listFields(): array
    {
        return ['*'];
    }
}

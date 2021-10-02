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

    protected function user($request, $version = 1): array
    {
        $datetime = date('Y-m-d') . 'T' . date('H:i:s');

        if ($request->method() == 'POST' || $version == 1) {
            return array_merge($request->all(), [
                'versao' => $version,
                'id_pessoa_inclusao' => Auth::user()['id'],
                'usuario_inclusao' => Auth::user()['name'],
                'data_inclusao' => $datetime,
                'id_pessoa_ult_alteracao' => Auth::user()['id'],
                'usuario_ult_alteracao' => Auth::user()['name'],
                'data_ult_alteracao' => $datetime
            ]);
        }

        return array_merge($request->all(), [
            'versao' => $version,
            'id_pessoa_ult_alteracao' => Auth::user()['id'],
            'usuario_ult_alteracao' => Auth::user()['name'],
            'data_ult_alteracao' => $datetime
        ]);
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
            $data = $this->user($request);
            $model = $this->model->create($data);
            return $model;
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
                $version = $model['versao'] + 1;
                $form = $this->user($request, $version);
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

    public function buscarPor($column, $value, $log = false)
    {
        try {
            $query = $this->model->where($column, '=', $value)->first();

            if ($log) {
                $query = $this->log($query);
            }

            return  $query;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function isDuplicate($columns, $values)
    {
        try {
            $query = $this->model->orderBy($columns[0], "asc");
            foreach ($columns as $key => $c) {
                $query->where($c, $values[$key]);
            }

            return $query->count() > 0 ? true : false;
        } catch (Exception $e) {
            return $e->getMessage();
        }
    }

    public function log($query): object
    {
        $change = $query['data_inclusao'] != $query['data_ult_alteracao'];

        return $query->setAttribute('log', [
            'usuario_inclusao' => $query['usuario_inclusao'],
            'data_inclusao' => Format::datetime_to_date_br($query['data_inclusao']),
            'usuario_ultima_atualizacao' => $change ? $query['usuario_ult_alteracao'] : '',
            'data_atualizacao' => $change ? Format::datetime_to_date_br($query['data_ult_alteracao']) : ''
        ]);
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

<?php

namespace App\Repositories;

use Illuminate\Http\Request;

interface BaseRepositoryInterface
{
    public function listar(
        int $porPagina = 5,
        string $direcao = null,
        string $ordenarPor = null,
        string $criterioBusca = null,
        string $filtros = null
    ): array;
    public function cadastrar(Request $request);
    public function editar(string $id, Request $request);
    public function buscarPor($column, $value, $log = false);
    public function excluir(string $id);
    public function options(int $porPagina = 5);
    public function log($query): object;
    public function listFields(): array;
}

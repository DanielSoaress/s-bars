<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use App\Services\ProdutoService;



use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    protected $service;

    public function __construct(ProdutoService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request): JsonResponse
    {
        return $this->service->listar($request->per_page ?? 5, $request->order, $request->sort, $request->search, $request->filters);
    }

    public function store(Request $request): JsonResponse
    {
        return $this->service->cadastrar($request);
    }

    public function show($id): JsonResponse
    {
        return $this->service->buscarPor('cod_produto', $id);
    }

    public function options(Request $request) : JsonResponse
    {
        return $this->service->options();
    }
}

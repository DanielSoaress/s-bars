<?php

namespace App\Http\Controllers;
use Illuminate\Http\JsonResponse;
use App\Services\ClientService;
use Illuminate\Http\Request;
class ClientController extends Controller
{
    protected $service;

    public function __construct(ClientService $service)
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
        return $this->service->buscarPor('id', $id);
    }

    public function destroy($id): JsonResponse
    {
        return $this->service->excluir($id);
    }

    public function update($id, Request $request): JsonResponse
    {
        return $this->service->editar($id, $request);
    }

    public function options(Request $request) : JsonResponse
    {
        return $this->service->options();
    }
}

<?php

namespace App\Repositories;

use App\Models\Cliente;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class ClienteRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Cliente::class;
    protected $sortBy = 'nom_cliente';

    public function __construct()
    {
        parent::__construct();
    }
}

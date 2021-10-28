<?php

namespace App\Repositories;

use App\Models\Funcionario;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class FuncionarioRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Funcionario::class;
    protected $sortBy = 'nom_func';

    public function __construct()
    {
        parent::__construct();
    }
}

<?php

namespace App\Repositories;

use App\Models\Produto;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class ProdutoRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Produto::class;
    protected $sortBy = 'nom_produto';

    public function __construct()
    {
        parent::__construct();
    }
}

<?php

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class ProductRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Product::class;
    protected $sortBy = 'nom_produto';

    public function __construct()
    {
        parent::__construct();
    }
}

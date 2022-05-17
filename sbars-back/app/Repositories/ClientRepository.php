<?php

namespace App\Repositories;

use App\Models\Client;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class ClientRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Client::class;
    protected $sortBy = 'nom_cliente';

    public function __construct()
    {
        parent::__construct();
    }
}

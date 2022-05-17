<?php

namespace App\Repositories;

use App\Models\Employee;
use App\Repositories\BaseRepository;
use App\Repositories\BaseRepositoryInterface;

class EmployeeRepository extends BaseRepository implements BaseRepositoryInterface
{
    protected $model = Employee::class;
    protected $sortBy = 'nom_func';

    public function __construct()
    {
        parent::__construct();
    }
}

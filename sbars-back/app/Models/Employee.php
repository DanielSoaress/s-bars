<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employees';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nom_employee',
        'tel_employee',
        'end_employee',
        'niver_employee',
        'user',
        'password',
        'email'
    ];

    protected $hidden = [
    ];
}

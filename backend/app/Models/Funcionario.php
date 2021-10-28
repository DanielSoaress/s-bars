<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $table = 'funcionarios';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nom_func',
        'tel_func',
        'end_func',
        'niver_func',
        'user',
        'password',
        'email'
    ];

    protected $hidden = [
    ];
}

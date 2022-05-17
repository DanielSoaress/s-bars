<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $table = 'clientes';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nom_cliente',
        'tel_cliente',
        'end_cliente',
        'niver_cliente',
        'cashback_cliente'
    ];

    protected $hidden = [
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'clients';
    protected $primaryKey = 'id';

    protected $fillable = [
        'nom_client',
        'tel_client',
        'end_client',
        'niver_client',
        'cashback_client'
    ];

    protected $hidden = [
    ];
}

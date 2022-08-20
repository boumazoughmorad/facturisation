<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Illuminate\Database\Eloquent\SoftDeletes;
class client extends Model
{
    use HasFactory;
    
    
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [
        'ICE',
         'Nom_client',
        'Adresse_client',
          'tele_client',
        'id_user'
        
    ];
    protected $hidden=['created_at','updated_at'];
}

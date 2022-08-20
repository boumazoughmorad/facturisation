<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class lignedocument extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [

         'id_document',
         'id_produit',
         'Qte',
         'PU_HT',
        
   
    ];
    protected $hidden=['created_at','updated_at'];
}

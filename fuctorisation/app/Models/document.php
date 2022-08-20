<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class document extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [

         'id_client',
         'Nom_document',
         'Type_document',
         'date_document',
         'date_echeance',
         'id_user',
         'forme',
        
    ];
    protected $hidden=['created_at','updated_at'];
}

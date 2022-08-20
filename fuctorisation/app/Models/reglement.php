<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class reglement extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [

         'prix_payee',
         'prix_reste',
         'Type_payee',
         'reference_reg',
         'id_user',
         
      
   
    ];
    protected $hidden=['created_at','updated_at'];
}

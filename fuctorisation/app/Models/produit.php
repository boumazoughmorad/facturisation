<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class produit extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates=['deleted_at'];
    protected $fillable = [

         'id_categorier',
         'Nom_produit',
         'reference',
         'prix_unitaire_TTC',
         'id_user',
         'Taux_TVA',
   
    ];
    protected $hidden=['created_at','updated_at'];
}

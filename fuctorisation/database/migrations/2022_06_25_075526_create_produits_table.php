<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProduitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produits', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_categorier')
            ->constrained('categories')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->String('Nom_produit');
            $table->String('reference');
            $table->double('prix_unitaire_TTC');   
            $table->integer('id_user');
            $table->double('Taux_TVA')->default(0.2);
            $table->timestamps();
            $table->softDeletes()->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('produits');
    }
};

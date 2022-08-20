<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLignedocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lignedocuments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_document')
            ->constrained('documents')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->foreignId('id_produit')
            ->constrained('produits')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->double('Qte')->nullable();
            $table->double('PU_HT')->nullable();
        
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
        Schema::dropIfExists('lignedocuments');
    }
};

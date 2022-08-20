<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_client')
            ->constrained('clients')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->String('Nom_document');
            $table->string('Type_document')->default(1);
            $table->Date('date_document');   
            $table->Date('date_echeance')->nullable();
            $table->integer('id_user')->nullable();
            $table->string('forme')->nullable();
            
            
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
        Schema::dropIfExists('documents');
    }
};

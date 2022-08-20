<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bays', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_document')
            ->constrained('documents')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->foreignId('id_reglement')
            ->constrained('reglements')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        
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
        Schema::dropIfExists('bays');
    }
};

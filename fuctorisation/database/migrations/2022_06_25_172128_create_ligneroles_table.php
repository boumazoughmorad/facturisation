<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLignerolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ligneroles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_role')
            ->constrained('roles')
            ->onDelete('cascade')
            ->onUpdate('cascade');
            $table->foreignId('id_user')
            ->constrained('users')
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
        Schema::dropIfExists('ligneroles');
    }
};

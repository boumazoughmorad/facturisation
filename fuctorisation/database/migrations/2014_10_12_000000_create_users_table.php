<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('nom_socieite');
            $table->string('image_path')->nullable();
            $table->string('email')->unique();
             $table->string('password');
             $table->string('ICE_user')->nullable();;
             $table->string('TF')->nullable();;
             $table->string('CNSS')->nullable();;
             $table->string('TP')->nullable();;
             $table->string('capitale')->nullable();;
             $table->string('TEL1')->nullable();;
             $table->string('TEL2')->nullable();;
             $table->string('FIX')->nullable();;
             $table->string('sit_web')->nullable();;
             $table->string('Adresse')->nullable();;
             $table->boolean('AUTH')->default(false);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
};

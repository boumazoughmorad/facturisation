<?php

namespace Database\Factories;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\document>
 */
class DocumentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    // protected $model= document::class;
    public function definition()
    {
        return [
            'id_client'=>'1',
            'Nom_document'=>$this->faker->name(),
            'Type_document'=> $this->faker->randomNumber(2),
            'date_document'=>$this->faker->date(),
            'date_échéance'=>$this->faker->date(),
            'id_user'=>$this->faker->randomNumber(2),
      
        ];
    }
}

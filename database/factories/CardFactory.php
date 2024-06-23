<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Card;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Card>
 */
class CardFactory extends Factory
{
    protected $model = Card::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $columns = ['backlog', 'todo', 'doing', 'done'];
        return [
            'title' => $this->fake()->text(20),
            'column' => $this->fake()->randomElement($columns),
        ];
    }
}

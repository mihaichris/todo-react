<?php

use App\Models\Todo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use function Pest\Laravel\{get, post, delete};

uses(RefreshDatabase::class);

it('can render the todos page', function () {
    get('/todos')
        ->assertStatus(200)
        ->assertInertia(fn (Assert $page) => $page
            ->component('Todos')
            ->has('todos')
        );
});

it('can create a todo', function () {
    $todoTitle = 'Test Todo';

    post('/api/todos', ['title' => $todoTitle])
        ->assertStatus(201);

    $this->assertDatabaseHas('todos', [
        'title' => $todoTitle,
    ]);
});

it('can delete a todo', function () {
    $todo = Todo::factory()->create();

    delete("/api/todos/{$todo->id}")
        ->assertStatus(204);

    $this->assertDatabaseMissing('todos', [
        'id' => $todo->id,
    ]);
});

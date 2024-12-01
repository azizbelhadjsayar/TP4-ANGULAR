import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  markDone(todo: Todo): void {
    this.todoService
      .updateTodo(todo.id, { done: true })
      .subscribe(() => this.loadTodos());
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => this.loadTodos());
  }

  editTodo(todo: Todo): void {
    // Logic for editing, navigate to an edit form, or handle inline.
  }
}

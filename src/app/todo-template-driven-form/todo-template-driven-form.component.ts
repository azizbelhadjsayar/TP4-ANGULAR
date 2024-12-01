import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Todo, TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-template-driven-form.component.html',
  styleUrl: './todo-template-driven-form.component.css'
})
export class TodoTemplateDrivenFormComponent {
  constructor(private todoService: TodoService, private router:Router) {}
  hideForm() {
    this.router.navigate(['/']);
  }
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.todoService.getTodos().subscribe((todos: Todo[]) => {
        const lastId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
        const newId = lastId + 1;
  
        const newTodo: Todo = { id: newId.toString(), ...form.value, done: false };
  
        this.todoService.addTodo(newTodo).subscribe(() => form.reset());
        window.location.href = '/todos';
      });
    }
  }
}

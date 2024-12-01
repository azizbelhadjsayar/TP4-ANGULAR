import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './head-bar/head-bar.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent, TodoDetailComponent, TodoListComponent, TodoReactiveFormComponent, TodoTemplateDrivenFormComponent, UpdateTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}

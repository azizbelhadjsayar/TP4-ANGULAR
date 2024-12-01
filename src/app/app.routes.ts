import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';
import { TodoTemplateDrivenFormComponent } from './todo-template-driven-form/todo-template-driven-form.component';
import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full' },
    { path: 'todos', component: EmptyComponent },
    { path: 'signin', component: TodoReactiveFormComponent },
    { path: 'new', component: TodoTemplateDrivenFormComponent },
    { path: '**', redirectTo: 'todos' }
];

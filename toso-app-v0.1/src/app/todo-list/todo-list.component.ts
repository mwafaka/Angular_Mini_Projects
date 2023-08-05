import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.services';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTask: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTask.trim() === '') return;
    this.todoService.addTodo(this.newTodoTask);
    this.newTodoTask = '';
  }

  toggleTodoStatus(todo: Todo): void {
    this.todoService.toggleTodoStatus(todo);
  }
  removeTodo(todo: Todo): void {
    this.todoService.removeTodo(todo);
  }
}

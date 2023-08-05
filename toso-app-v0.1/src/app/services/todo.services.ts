import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(task: string): void {
    const id = this.todos.length + 1;
    const newTodo = new Todo(id, task, false);
    this.todos.push(newTodo);
  }

  toggleTodoStatus(todo: Todo): void {
    todo.completed = !todo.completed;
  }
  removeTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

}

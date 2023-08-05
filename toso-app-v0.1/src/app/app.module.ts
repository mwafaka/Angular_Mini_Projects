import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import this module
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './services/todo.services'; // Import the service

@NgModule({
  declarations: [AppComponent, TodoListComponent],
  imports: [BrowserModule, FormsModule], // Add FormsModule here
  providers: [TodoService], // Add the service to providers
  bootstrap: [AppComponent]
})
export class AppModule {}

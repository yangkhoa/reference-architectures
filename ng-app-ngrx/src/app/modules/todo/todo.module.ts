import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoService } from './services/todo.service';
import { TODO_ROUTES } from './todo.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(TODO_ROUTES)],
  providers: [TodoService],
})
export class ToDoModule {}

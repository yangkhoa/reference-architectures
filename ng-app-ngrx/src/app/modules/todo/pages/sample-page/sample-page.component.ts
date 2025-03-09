import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItemActions } from '../../state/todo.actions';
import { PriorityLevel } from '../../models/todo-item.model';
import { selectTodoList } from '../../state/todo.selectors';

@Component({
  selector: 'app-sample-page',
  imports: [],
  templateUrl: './sample-page.component.html',
  styleUrl: './sample-page.component.scss',
})
export class SamplePageComponent {
  private store = inject(Store);
  todoList$ = this.store.select(selectTodoList);

  constructor() {
    this.todoList$.subscribe((todoList) => {
      console.log(todoList);
    });
  }

  ngOnInit() {
    this.onAdd();
  }

  onAdd() {
    this.store.dispatch(
      TodoItemActions.addNew({
        item: {
          title: 'New Todo Item',
          note: 'This is a new todo item',
          reminder: '2021-12-31T23:59:59',
          done: false,
          priority: PriorityLevel.High,
        },
      })
    );
  }
}

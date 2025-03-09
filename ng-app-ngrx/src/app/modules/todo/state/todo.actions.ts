import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { TodoItem } from '../models/todo-item.model';

export const TodoItemActions = createActionGroup({
  source: 'TodoItem',
  events: {
    load: emptyProps(),
    'load success': props<{ items: TodoItem[] }>(),
    'add new': props<{ item: TodoItem }>(),
  },
});

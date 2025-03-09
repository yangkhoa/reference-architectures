import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from '../services/todo.service';
import { TodoItemActions } from './todo.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';

@Injectable()
export class MoviesEffects {
  private actions$ = inject(Actions);
  private todoService = inject(TodoService);

  loadTodoList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoItemActions.load),
      exhaustMap(() =>
        this.todoService.getAll().pipe(
          map((todos) => {
            return TodoItemActions.loadSuccess({ items: todos });
          }),
          catchError(() => EMPTY)
        )
      )
    );
  });
}

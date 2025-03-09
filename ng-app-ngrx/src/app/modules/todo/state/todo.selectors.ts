import { createSelector } from '@ngrx/store';
import { ITodoState } from './todo.reducer';
import { IAppState } from '../../../app.config';

export const selectTodoFeature = (state: IAppState) => state.todo;

export const selectTodoList = createSelector(
  selectTodoFeature,
  (state: ITodoState) => state.todoList
);

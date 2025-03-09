import { createReducer, on } from '@ngrx/store';
import { TodoItemActions } from './todo.actions';
import { TodoItem } from '../models/todo-item.model';

export const TodoReducerKey = 'todo';

export interface ITodoState {
  todoList: TodoItem[];
}

export const initialState: ITodoState = {
  todoList: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoItemActions.addNew, (state, action) => ({
    ...state,
    todoList: [...state.todoList, action.item],
  }))
);

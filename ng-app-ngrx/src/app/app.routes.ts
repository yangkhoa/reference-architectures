import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'to-do-list',
    loadChildren: () =>
      import('./modules/todo/todo.module').then((m) => m.ToDoModule),
  },
  //DEFAULT PATH
  {
    path: '**',
    redirectTo: 'to-do-list',
  },
];

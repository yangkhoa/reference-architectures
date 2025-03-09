import { Routes } from '@angular/router';

export const TODO_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sample-page',
  },
  {
    path: 'sample-page',
    loadComponent: () =>
      import('./pages/sample-page/sample-page.component').then(
        (cmp) => cmp.SamplePageComponent
      ),
  },
];

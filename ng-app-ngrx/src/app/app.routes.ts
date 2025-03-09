import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/feature.module').then((m) => m.FeatureModule),
  },
];

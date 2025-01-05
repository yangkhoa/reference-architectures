import { Routes } from '@angular/router';

export const Pages = {
  FeatureA: {
    Path: 'featureA',
    Title: 'FeatureA',
  },
};

export const MODULE_ROUTES: Routes = [
  {
    path: Pages.FeatureA.Path,
    loadChildren: () =>
      import('./feature-a/feature-a.module').then((m) => m.FeatureAModule),
  },
  //DEFAULT PATH
  {
    path: '**',
    redirectTo: Pages.FeatureA.Path,
  },
];

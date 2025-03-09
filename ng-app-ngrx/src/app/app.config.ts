import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  ITodoState,
  todoReducer,
  TodoReducerKey,
} from './modules/todo/state/todo.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export interface IAppState {
  todo: ITodoState;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES),
    provideClientHydration(withEventReplay()),
    provideStore(),
    provideState({ name: TodoReducerKey, reducer: todoReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};

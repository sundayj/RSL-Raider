import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Champions } from './champions.model';

export const loadChampions = createAction(
  '[Champions/API] Load Champions',
  props<{ champions: Champions[] }>()
);

export const addChampion = createAction(
  '[Champions/API] Add Champion',
  props<{ champions: Champions }>()
);

export const upsertChampion = createAction(
  '[Champions/API] Upsert Champion',
  props<{ champions: Champions }>()
);

export const addChampions = createAction(
  '[Champions/API] Add Champions',
  props<{ champions: Champions[] }>()
);

export const upsetChampions = createAction(
  '[Champions/API] Upsert Champions',
  props<{ champions: Champions[] }>()
);

export const updateChampion = createAction(
  '[Champions/API] Update Champion',
  props<{ champions: Update<Champions> }>()
);

export const updateChampions = createAction(
  '[Champions/API] Update Champions',
  props<{ champions: Update<Champions>[] }>()
);

export const deleteChampion = createAction(
  '[Champions/API] Delete Champion',
  props<{ id: string }>()
);

export const deleteChampions = createAction(
  '[Champions/API] Delete Champions',
  props<{ ids: string[] }>()
);

export const clearChampions = createAction(
  '[Champions/API] Clear Champions'
);

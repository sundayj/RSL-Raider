import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Arena } from './arena.model';

export const loadArenas = createAction(
  '[Arena/API] Load Arenas', 
  props<{ arenas: Arena[] }>()
);

export const addArena = createAction(
  '[Arena/API] Add Arena',
  props<{ arena: Arena }>()
);

export const upsertArena = createAction(
  '[Arena/API] Upsert Arena',
  props<{ arena: Arena }>()
);

export const addArenas = createAction(
  '[Arena/API] Add Arenas',
  props<{ arenas: Arena[] }>()
);

export const upsertArenas = createAction(
  '[Arena/API] Upsert Arenas',
  props<{ arenas: Arena[] }>()
);

export const updateArena = createAction(
  '[Arena/API] Update Arena',
  props<{ arena: Update<Arena> }>()
);

export const updateArenas = createAction(
  '[Arena/API] Update Arenas',
  props<{ arenas: Update<Arena>[] }>()
);

export const deleteArena = createAction(
  '[Arena/API] Delete Arena',
  props<{ id: string }>()
);

export const deleteArenas = createAction(
  '[Arena/API] Delete Arenas',
  props<{ ids: string[] }>()
);

export const clearArenas = createAction(
  '[Arena/API] Clear Arenas'
);

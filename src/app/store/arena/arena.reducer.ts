import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Arena } from './arena.model';
import * as ArenaActions from './arena.actions';

export const arenasFeatureKey = 'arenas';

export interface State extends EntityState<Arena> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Arena> = createEntityAdapter<Arena>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArenaActions.addArena,
    (state, action) => adapter.addOne(action.arena, state)
  ),
  on(ArenaActions.upsertArena,
    (state, action) => adapter.upsertOne(action.arena, state)
  ),
  on(ArenaActions.addArenas,
    (state, action) => adapter.addMany(action.arenas, state)
  ),
  on(ArenaActions.upsertArenas,
    (state, action) => adapter.upsertMany(action.arenas, state)
  ),
  on(ArenaActions.updateArena,
    (state, action) => adapter.updateOne(action.arena, state)
  ),
  on(ArenaActions.updateArenas,
    (state, action) => adapter.updateMany(action.arenas, state)
  ),
  on(ArenaActions.deleteArena,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ArenaActions.deleteArenas,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ArenaActions.loadArenas,
    (state, action) => adapter.setAll(action.arenas, state)
  ),
  on(ArenaActions.clearArenas,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

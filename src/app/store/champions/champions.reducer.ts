import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Champions } from './champions.model';
import * as ChampionsActions from './champions.actions';

export const championsFeatureKey = 'champions';

export interface State extends EntityState<Champions> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Champions> = createEntityAdapter<Champions>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ChampionsActions.addChampion,
    (state, action) => adapter.addOne(action.champions, state)
  ),
  on(ChampionsActions.upsertChampion,
    (state, action) => adapter.upsertOne(action.champions, state)
  ),
  on(ChampionsActions.addChampions,
    (state, action) => adapter.addMany(action.champions, state)
  ),
  on(ChampionsActions.upsetChampions,
    (state, action) => adapter.upsertMany(action.champions, state)
  ),
  on(ChampionsActions.updateChampion,
    (state, action) => adapter.updateOne(action.champions, state)
  ),
  on(ChampionsActions.updateChampions,
    (state, action) => adapter.updateMany(action.champions, state)
  ),
  on(ChampionsActions.deleteChampion,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ChampionsActions.deleteChampions,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ChampionsActions.loadChampions,
    (state, action) => adapter.setAll(action.champions, state)
  ),
  on(ChampionsActions.clearChampions,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

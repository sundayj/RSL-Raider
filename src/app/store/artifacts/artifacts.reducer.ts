import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Artifacts } from './artifacts.model';
import * as ArtifactsActions from './artifacts.actions';

export const artifactsesFeatureKey = 'artifactses';

export interface State extends EntityState<Artifacts> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Artifacts> = createEntityAdapter<Artifacts>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ArtifactsActions.addArtifacts,
    (state, action) => adapter.addOne(action.artifacts, state)
  ),
  on(ArtifactsActions.upsertArtifacts,
    (state, action) => adapter.upsertOne(action.artifacts, state)
  ),
  on(ArtifactsActions.addArtifactss,
    (state, action) => adapter.addMany(action.artifactss, state)
  ),
  on(ArtifactsActions.upsertArtifactss,
    (state, action) => adapter.upsertMany(action.artifactss, state)
  ),
  on(ArtifactsActions.updateArtifacts,
    (state, action) => adapter.updateOne(action.artifacts, state)
  ),
  on(ArtifactsActions.updateArtifactss,
    (state, action) => adapter.updateMany(action.artifactss, state)
  ),
  on(ArtifactsActions.deleteArtifacts,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ArtifactsActions.deleteArtifactss,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ArtifactsActions.loadArtifactss,
    (state, action) => adapter.setAll(action.artifactss, state)
  ),
  on(ArtifactsActions.clearArtifactss,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Artifacts } from './artifacts.model';

export const loadArtifactss = createAction(
  '[Artifacts/API] Load Artifactss', 
  props<{ artifactss: Artifacts[] }>()
);

export const addArtifacts = createAction(
  '[Artifacts/API] Add Artifacts',
  props<{ artifacts: Artifacts }>()
);

export const upsertArtifacts = createAction(
  '[Artifacts/API] Upsert Artifacts',
  props<{ artifacts: Artifacts }>()
);

export const addArtifactss = createAction(
  '[Artifacts/API] Add Artifactss',
  props<{ artifactss: Artifacts[] }>()
);

export const upsertArtifactss = createAction(
  '[Artifacts/API] Upsert Artifactss',
  props<{ artifactss: Artifacts[] }>()
);

export const updateArtifacts = createAction(
  '[Artifacts/API] Update Artifacts',
  props<{ artifacts: Update<Artifacts> }>()
);

export const updateArtifactss = createAction(
  '[Artifacts/API] Update Artifactss',
  props<{ artifactss: Update<Artifacts>[] }>()
);

export const deleteArtifacts = createAction(
  '[Artifacts/API] Delete Artifacts',
  props<{ id: string }>()
);

export const deleteArtifactss = createAction(
  '[Artifacts/API] Delete Artifactss',
  props<{ ids: string[] }>()
);

export const clearArtifactss = createAction(
  '[Artifacts/API] Clear Artifactss'
);

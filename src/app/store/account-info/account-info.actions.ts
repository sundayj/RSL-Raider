import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { AccountInfo } from './account-info.model';

export const loadAccountInfos = createAction(
  '[AccountInfo/API] Load AccountInfos', 
  props<{ accountInfos: AccountInfo[] }>()
);

export const addAccountInfo = createAction(
  '[AccountInfo/API] Add AccountInfo',
  props<{ accountInfo: AccountInfo }>()
);

export const upsertAccountInfo = createAction(
  '[AccountInfo/API] Upsert AccountInfo',
  props<{ accountInfo: AccountInfo }>()
);

export const addAccountInfos = createAction(
  '[AccountInfo/API] Add AccountInfos',
  props<{ accountInfos: AccountInfo[] }>()
);

export const upsertAccountInfos = createAction(
  '[AccountInfo/API] Upsert AccountInfos',
  props<{ accountInfos: AccountInfo[] }>()
);

export const updateAccountInfo = createAction(
  '[AccountInfo/API] Update AccountInfo',
  props<{ accountInfo: Update<AccountInfo> }>()
);

export const updateAccountInfos = createAction(
  '[AccountInfo/API] Update AccountInfos',
  props<{ accountInfos: Update<AccountInfo>[] }>()
);

export const deleteAccountInfo = createAction(
  '[AccountInfo/API] Delete AccountInfo',
  props<{ id: string }>()
);

export const deleteAccountInfos = createAction(
  '[AccountInfo/API] Delete AccountInfos',
  props<{ ids: string[] }>()
);

export const clearAccountInfos = createAction(
  '[AccountInfo/API] Clear AccountInfos'
);

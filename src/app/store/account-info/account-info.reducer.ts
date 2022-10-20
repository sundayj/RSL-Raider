import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AccountInfo } from './account-info.model';
import * as AccountInfoActions from './account-info.actions';

export const accountInfoFeatureKey = 'accountInfo';

export interface State extends EntityState<AccountInfo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<AccountInfo> = createEntityAdapter<AccountInfo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(AccountInfoActions.addAccountInfo,
    (state, action) => adapter.addOne(action.accountInfo, state)
  ),
  on(AccountInfoActions.upsertAccountInfo,
    (state, action) => adapter.upsertOne(action.accountInfo, state)
  ),
  on(AccountInfoActions.addAccountInfos,
    (state, action) => adapter.addMany(action.accountInfos, state)
  ),
  on(AccountInfoActions.upsertAccountInfos,
    (state, action) => adapter.upsertMany(action.accountInfos, state)
  ),
  on(AccountInfoActions.updateAccountInfo,
    (state, action) => adapter.updateOne(action.accountInfo, state)
  ),
  on(AccountInfoActions.updateAccountInfos,
    (state, action) => adapter.updateMany(action.accountInfos, state)
  ),
  on(AccountInfoActions.deleteAccountInfo,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AccountInfoActions.deleteAccountInfos,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AccountInfoActions.loadAccountInfos,
    (state, action) => adapter.setAll(action.accountInfos, state)
  ),
  on(AccountInfoActions.clearAccountInfos,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

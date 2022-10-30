import { Injectable } from '@angular/core';
import {AccountDump} from '../../store/models/RaidCollection/account-dump.model';
import {AccountInfo, IAccountApi, useRaidToolkitApi} from '@raid-toolkit/webclient';
import {INIT_RAID_COLLECTION, RaidCollection} from '../../store/models/RaidCollection/raid-collection.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RaidToolkitService {
  get accountDump(): AccountDump {
    return this._accountDump ?? {};
  }
  set accountDump(value: AccountDump) {
    this._accountDump = value;
  }

  get account(): AccountInfo {
    return <AccountInfo>this._account;
  }
  set account(value: AccountInfo) {
    this._account = value;
  }

  get resources(){
    return this._allResources;
  }
  set resources(value){
    this._allResources = value;
  }

  accountApi: IAccountApi = useRaidToolkitApi(IAccountApi);

  private _account: AccountInfo | unknown;
  private _accountDump: AccountDump = INIT_RAID_COLLECTION;
  private _allResources: any | undefined;

  constructor(private _snackBar: MatSnackBar) {
    this.setup();
  }

  async setup(){
    await this.accountApi.getAccounts().then(acc => {
      this.account = acc[0];
    }).catch(error => {
      this._snackBar.open(error, "ERROR");
      console.error(error);
    })
    await this.refresh();
  }

  async refresh(){
    if (!this.account?.id){ return;}
    this.accountDump = (await this.accountApi.getAccountDump(this.account.id)) as RaidCollection;
    this.resources = (await this.accountApi.getAllResources(this.account.id));
  }
}

import { Injectable } from '@angular/core';
import {Factions, IFactionEntity} from '../static-data/db/factions';
import {FactionGroups, IFactionGroupEntity} from '../static-data/db/faction-groups';
import {IFactionsByFactionGroup} from '../static-data/db/factions-by-faction-groups.model';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  allFactions: IFactionEntity[] = Factions;
  allFactionGroups: IFactionGroupEntity[] = FactionGroups;

  constructor() { }

  getAllActiveFactionsAndGroups(){
    const factionsAndGroups: IFactionsByFactionGroup[] = this.allFactionGroups.map(fg => ({
      factionGroup: {...fg},
      factions: [...this.allFactions.filter(f => f.FactionGroupId === fg.Id && f.Active)]
    }));

    return factionsAndGroups;
  }
}

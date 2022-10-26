import { Injectable } from '@angular/core';
import {FactionEntity, IFactionEntity} from '../data/entities/faction-entity';
import {FactionGroupEntity, IFactionGroupEntity} from '../data/entities/faction-group-entity';
import {DatabaseService} from '../data/database.service';
import {IFactionsByFactionGroup} from '../../store/models/Database/factions-by-faction-group';

@Injectable({
  providedIn: 'root'
})
export class FactionService {

  getAllFactions = `SELECT * FROM Factions WHERE Factions.Active = 1`;
  getAllFactionGroups = `SELECT * FROM FactionGroups WHERE FactionGroups.Active = 1`;

  constructor(private _databaseService: DatabaseService) { }

  getAllActiveFactionsAndGroups(){
    // const allFactions = this._databaseService.getAllOfEntity(this.getAllFactions, new FactionEntity());
    // const allFactionGroups = this._databaseService.getAllOfEntity(this.getAllFactionGroups, new FactionGroupEntity());

    // Joining the two tables in SQL for SQLite returned weird results,
    // so doing it here until I decide to implement an ORM
    // const factionsAndGroups: IFactionsByFactionGroup[] = allFactionGroups.map(fg => ({
    //   factionGroup: {...fg},
    //   factions: [...allFactions.filter(f => f.FactionGroupId === fg.Id)]
    // }));

    // return factionsAndGroups;
  }
}

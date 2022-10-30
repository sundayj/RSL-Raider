import {Component, Input, OnInit} from '@angular/core';
import {IFactionGuardians, INIT_FACTION_GUARDIANS} from '../../store/models/RaidCollection/faction-guardians.model';
import {IFactionsByFactionGroup} from '../../services/static-data/db/factions-by-faction-groups.model';
import {FactionService} from '../../services/factions/faction.service';
import {Rarity} from '@raid-toolkit/webclient';

@Component({
  selector: 'app-faction-guardians',
  templateUrl: './faction-guardians.component.html',
  styleUrls: ['./faction-guardians.component.css']
})
export class FactionGuardiansComponent implements OnInit {

  _initFactionGuardians = INIT_FACTION_GUARDIANS;
  _factionsByFactionGroup: IFactionsByFactionGroup[] = [];

  get factionsByFactionGroup(){
    return this._factionsByFactionGroup;
  }
  set factionsByFactionGroup(value: IFactionsByFactionGroup[]){
    this._factionsByFactionGroup = value;
  }

  @Input()
  set factionGuardians(value: IFactionGuardians){
    let newFactionGuardians = {};
    for (const fGKey in value) {
      const formattedKey = `${fGKey.substring(0,1).toUpperCase()}${fGKey.substring(1)}`;
      let formattedValue = value[fGKey];
      let newValueObject = {};
      for (const formattedValueKey in formattedValue) {
        const fvKey = `${formattedValueKey.substring(0,1).toUpperCase()}${formattedValueKey.substring(1)}`;
        newValueObject = {
          ...newValueObject,
          [fvKey]: formattedValue[formattedValueKey]
        };
      }
      newFactionGuardians = {
        ...newFactionGuardians,
        [formattedKey]: newValueObject
      };
    }
    this._initFactionGuardians = {
      ...this._initFactionGuardians,
      ...newFactionGuardians
    };
  }

  get factionGuardians(): IFactionGuardians{
    return this._initFactionGuardians;
  }

  constructor(private _factionService: FactionService) {
    this.factionsByFactionGroup = this._factionService.getAllActiveFactionsAndGroups();
  }

  ngOnInit(): void {
  }

  getFactionGuardiansForFaction(faction: string){
    const keysToDelete = ['Uncommon', 'Common'];
    let neededFactionGuardians = this.factionGuardians[faction];
    for (const keyToDelete of keysToDelete) {
      if (neededFactionGuardians.hasOwnProperty(keyToDelete)){
        delete neededFactionGuardians[keyToDelete];
      }
    }
    return neededFactionGuardians;
  }

  checkGuardiansExist(faction: string):boolean {
    let result = false;
    const neededFactionGuardians = this.factionGuardians[faction];
    for (const [key, value] of Object.entries(neededFactionGuardians)){
      result = (value as number) > 0;
    }
    return result;
  }

}

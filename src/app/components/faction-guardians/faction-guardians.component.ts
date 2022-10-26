import {Component, Input, OnInit} from '@angular/core';
import {IFactionGuardians, INIT_FACTION_GUARDIANS} from '../../store/models/RaidCollection/faction-guardians.model';
import {FactionService} from '../../services/factions/faction.service';
import {IFactionsByFactionGroup} from '../../store/models/Database/factions-by-faction-group';

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

  @Input()
  set factionGuardians(value: IFactionGuardians){
    this._initFactionGuardians = {...this._initFactionGuardians, ...value};
    console.log(this._initFactionGuardians);
  }

  get factionGuardians(){
    return this._initFactionGuardians;
  }

  constructor(private _factionService: FactionService) { }

  ngOnInit(): void {
    // this._factionsByFactionGroup = this._factionService.getAllActiveFactionsAndGroups();
  }

}

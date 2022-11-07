import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ShardType} from '../../store/enums/shard-type.enum';
import {IShards} from '../../store/models/RaidCollection/shard.model';
import {IInventoryModel, INIT_INVENTORY} from '../../store/models/Inventory/inventory.model';
import {BasicInventoryEnum} from '../../store/enums/inventory.enum';
import {FactionService} from '../../services/factions/faction.service';
import {IFactionEntity} from '../../services/static-data/db/factions';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnChanges {

  @Input()
  allResources: IInventoryModel = INIT_INVENTORY;
  @Input()
  arenaLeague: string = '';
  @Input()
  heroCount: number = 0;

  shardTypes = Object.keys(ShardType).map(st => st.toString());
  basicInventoryEnum = BasicInventoryEnum;
  activeFactions: IFactionEntity[] = [];
  factionKeysEmpty: boolean = false;

  constructor(private _factionService: FactionService) { }

  ngOnInit(): void {
    this.activeFactions = this._factionService.getAllActiveFactions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.allResources){
      let keyMatch = 0;
      for (const [basicKey, basicValue] of Object.entries(changes.allResources.currentValue.basic)) {
        if (((typeof basicValue) !== 'number')){continue;}
        if (!basicKey.toString().startsWith('Fraction')){continue;}
        if (((basicValue as number) <= 0)){continue;}
        keyMatch += 1;
      }
      this.factionKeysEmpty = keyMatch === 0;
    }
  }

}

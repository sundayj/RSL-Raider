import {Component, Input, OnInit} from '@angular/core';
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
export class InventoryComponent implements OnInit {

  @Input()
  allResources: IInventoryModel = INIT_INVENTORY;
  @Input()
  arenaLeague: string = '';
  @Input()
  heroCount: number = 0;

  shardTypes = Object.keys(ShardType).map(st => st.toString());
  basicInventoryEnum = BasicInventoryEnum;
  activeFactions: IFactionEntity[] = [];

  constructor(private _factionService: FactionService) { }

  ngOnInit(): void {
    this.activeFactions = this._factionService.getAllActiveFactions();
  }

}

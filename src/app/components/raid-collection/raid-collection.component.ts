import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {INIT_RAID_COLLECTION, RaidCollection} from '../../store/models/RaidCollection/raid-collection.model';
import {INIT_GREAT_HALL} from '../../store/models/RaidCollection/great-hall.model';
import {INIT_FACTION_GUARDIANS} from '../../store/models/RaidCollection/faction-guardians.model';
import {IInventoryModel, INIT_INVENTORY} from '../../store/models/Inventory/inventory.model';

@Component({
  selector: 'app-raid-collection',
  templateUrl: './raid-collection.component.html',
  styleUrls: ['./raid-collection.component.css']
})
export class RaidCollectionComponent implements OnInit, OnChanges {

  @Input()
  raidCollection: RaidCollection = INIT_RAID_COLLECTION;
  @Input()
  allResources: IInventoryModel = INIT_INVENTORY;
  @Input()
  basicStats: {} | undefined;
  initGreatHall = INIT_GREAT_HALL;
  initFactionGuardians = INIT_FACTION_GUARDIANS;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.raidCollection){
      this.raidCollection = changes.raidCollection.currentValue as RaidCollection;
    }
  }
}

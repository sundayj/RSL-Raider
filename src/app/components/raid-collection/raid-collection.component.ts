import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InitRaidCollection, RaidCollection} from '../../store/models/RaidCollection/raid-collection.model';
import {ShardType} from '../../store/enums/shard-type.enum';

@Component({
  selector: 'app-raid-collection',
  templateUrl: './raid-collection.component.html',
  styleUrls: ['./raid-collection.component.css']
})
export class RaidCollectionComponent implements OnInit, OnChanges {

  @Input()
  raidCollection: RaidCollection = InitRaidCollection;
  shardTypes = Object.keys(ShardType).map(st => st.toString());

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.raidCollection){
      this.raidCollection = changes.raidCollection.currentValue as RaidCollection;
    }
  }

  doShardsHaveShardType(shardType: string): boolean {
    if (!shardType) {return false;}
    return this.raidCollection.shards.hasOwnProperty(shardType);
  }
}

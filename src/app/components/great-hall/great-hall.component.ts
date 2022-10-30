import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IGreatHallModel} from '../../store/models/RaidCollection/great-hall.model';
import {Affinity} from '@raid-toolkit/webclient';
import {StatKindId} from '@raid-toolkit/webclient/lib/Types/Enums';

@Component({
  selector: 'app-great-hall',
  templateUrl: './great-hall.component.html',
  styleUrls: ['./great-hall.component.css']
})
export class GreatHallComponent implements OnInit, OnChanges {

  @Input()
  set greatHall(value: IGreatHallModel){
    let affinities: Affinity[] = [];
    for (const [key, affinity] of Object.entries(value)) {
      let mappedAffinity: Affinity = {
        Name: `${key[0].toUpperCase()}${key.substring(1)}`,
        ...affinity
      };
      affinities.push(mappedAffinity);
    }
    this.dataSource = affinities;
  }

  displayedColumns: string[] = [
    "Name",
    StatKindId.Attack.toLowerCase(),
    StatKindId.Defense.toLowerCase(),
    StatKindId.Health.toLowerCase(),
    StatKindId.Accuracy.toLowerCase(),
    StatKindId.Resistance.toLowerCase(),
    "criticalDamage"
  ];
  dataSource: Affinity[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.raidCollection){
      this.greatHall = changes.greatHall.currentValue as IGreatHallModel;
    }
  }

}

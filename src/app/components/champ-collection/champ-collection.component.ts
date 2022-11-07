import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {IChampion} from '../../store/models/Champions/champion.model';
import {Factions} from '../../services/static-data/db/factions';
import {debounceTime, of, startWith, switchMap} from 'rxjs';
import { MatSelectionListChange} from '@angular/material/list';
import {FormControl} from '@angular/forms';

enum formControlEnum{
  'factions',
  'search'
}

@Component({
  selector: 'app-champ-collection',
  templateUrl: './champ-collection.component.html',
  styleUrls: ['./champ-collection.component.css']
})
export class ChampCollectionComponent implements OnInit {

  @Input()
  userChamps: IChampion[] = [];

  filteredChamps: IChampion[] = [];

  factions = Factions.filter(f => f.Active);

  factionControl = new FormControl();

  constructor(
    private _changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.filteredChamps = <IChampion[]>this.userChamps;
  }



  selectionChange(event: MatSelectionListChange) {
    console.info(event);
    let options = event.options;
    let value = this.factionControl.value || [];
    options.forEach(opt => {
      if (opt.selected) value.push(opt.value);
      else value = value.filter((x: any) => x != opt.value);
    })
    this.factionControl.setValue(value);
    this.filterChamps(formControlEnum.factions);
  }

  filterChamps(control: formControlEnum, champs?: IChampion[]){
    if (!champs) {
      champs = this.filteredChamps.length > 0 ? this.filteredChamps : this.userChamps;
    }
    switch (control) {
      case formControlEnum.factions:
        this.filteredChamps = champs?.filter(c => this.factionControl.value.length > 0 ? this.factionControl.value.includes(c.type.faction) : champs);
        break;
      default:
        this.filteredChamps = champs;
    }
    console.info(this.factionControl.value)

  }
}

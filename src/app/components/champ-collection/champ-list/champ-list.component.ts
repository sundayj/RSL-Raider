import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IChampion} from '../../../store/models/Champions/champion.model';
import {FormControl} from '@angular/forms';
import {debounceTime, of, startWith, switchMap} from 'rxjs';

@Component({
  selector: 'app-champ-list',
  templateUrl: './champ-list.component.html',
  styleUrls: ['./champ-list.component.css']
})
export class ChampListComponent implements OnInit, OnChanges {

  @Input()
  champList: IChampion[] = [];
  
  search = new FormControl();

  $search = this.search.valueChanges.pipe(
    startWith(null),
    debounceTime(200),
    switchMap((res: string) => {
      if (!res) return of(this.champList);
      res = res.toLowerCase();
      return of(
        this.champList.filter(x => x.name.toLowerCase().indexOf(res) > -1)
      );
    })
  );

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

}

import {Component, OnInit} from '@angular/core';
import {RaidToolkitService} from './services/raid-toolkit/raid-toolkit.service';
import {RaidCollection} from './store/models/RaidCollection/raid-collection.model';
import {INIT_GREAT_HALL} from './store/models/RaidCollection/great-hall.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RSL Raider - A Raid Collection Viewer';

  loading = true;
  raidCollection: RaidCollection | undefined;
  initGreatHall = INIT_GREAT_HALL;

  constructor(private _raidToolKitService: RaidToolkitService) {
  }

  ngOnInit() {
    try {
      setInterval(() => {
        this.raidCollection = this._raidToolKitService.accountDump;
        this.loading = false;
      }, 3000)
    } catch(error) {
      console.error(error);
    }
  }

  async refreshData() {
    this.loading = true
    await this._raidToolKitService.refresh();
    setInterval(() => {
      this.raidCollection = this._raidToolKitService.accountDump;
      this.loading = false;
    }, 3000)
  }
}

import {Component, OnInit} from '@angular/core';
import {RaidToolkitService} from './services/raid-toolkit/raid-toolkit.service';
import {RaidCollection} from './store/models/RaidCollection/raid-collection.model';
import {INIT_GREAT_HALL} from './store/models/RaidCollection/great-hall.model';
import {INIT_FACTION_GUARDIANS} from './store/models/RaidCollection/faction-guardians.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RSL Raider - A Raid Collection Viewer';

  loading = true;
  raidCollection: RaidCollection | undefined;
  allResources: any | undefined;


  constructor(private _raidToolKitService: RaidToolkitService) {
  }

  ngOnInit() {
    try {
      this.refreshData(false);
    } catch(error) {
      console.error(error);
    }
  }

  async refreshData(isLoaded: boolean = false) {
    this.loading = true
    await this._raidToolKitService.refresh();
    let loaded: boolean = isLoaded;
    setInterval((isLoaded: boolean = loaded) => {
      if (isLoaded){return;}
      this.raidCollection = this._raidToolKitService.accountDump;
      this.allResources = this._raidToolKitService.resources;
      this.loading = false;
      loaded = true;
    }, 3000, loaded)

    console.info(this.allResources);

  }
}

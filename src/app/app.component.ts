import {Component, OnInit} from '@angular/core';
import {RaidToolkitService} from './services/raid-toolkit/raid-toolkit.service';
import {RaidCollection} from './store/models/RaidCollection/raid-collection.model';
import {Router} from '@angular/router';

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
  userChamps: any | undefined;
  links: string[] = ['Inventory', 'Champions']
  activeLink: string = this.links[0];


  constructor(
    private _raidToolKitService: RaidToolkitService,
    private _router: Router
  ) {
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
      this.userChamps = this._raidToolKitService.userChamps;
      this.loading = false;
      loaded = true;
    }, 3000, loaded)
  }

}

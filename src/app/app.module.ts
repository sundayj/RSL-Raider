import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { reducers, metaReducers } from './store';
import * as fromAccountInfo from './store/account-info/account-info.reducer';
import * as fromArena from './store/arena/arena.reducer';
import * as fromArtifacts from './store/artifacts/artifacts.reducer';
import * as fromChampions from './store/champions/champions.reducer';
import { SkillComponent } from './components/skill/skill.component';
import { RaidCollectionComponent } from './components/raid-collection/raid-collection.component';
import { MasteryScrollComponent } from './components/mastery-scroll/mastery-scroll.component';
import { HeroComponent } from './components/hero/hero.component';
import { GuardianComponent } from './components/guardian/guardian.component';
import { GreatHallComponent } from './components/great-hall/great-hall.component';
import { FactionGuardiansComponent } from './components/faction-guardians/faction-guardians.component';
import { BonusComponent } from './components/bonus/bonus.component';
import { ArtifactComponent } from './components/artifact/artifact.component';
import { AffinityComponent } from './components/affinity/affinity.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ServiceWorkerModule } from '@angular/service-worker';
import {RouterOutlet, RouterModule} from '@angular/router';
import { ChampCollectionComponent } from './components/champ-collection/champ-collection.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    RaidCollectionComponent,
    MasteryScrollComponent,
    HeroComponent,
    GuardianComponent,
    GreatHallComponent,
    FactionGuardiansComponent,
    BonusComponent,
    ArtifactComponent,
    AffinityComponent,
    ChampCollectionComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromAccountInfo.accountInfoFeatureKey, fromAccountInfo.reducer),
    StoreModule.forFeature(fromArena.arenasFeatureKey, fromArena.reducer),
    StoreModule.forFeature(fromArtifacts.artifactsesFeatureKey, fromArtifacts.reducer),
    StoreModule.forFeature(fromChampions.championsFeatureKey, fromChampions.reducer),
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTableModule,
    FlexModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterOutlet,
    RouterModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

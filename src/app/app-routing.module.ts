import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChampCollectionComponent} from './components/champ-collection/champ-collection.component';
import {RaidCollectionComponent} from './components/raid-collection/raid-collection.component';

const routes: Routes = [
  {path: 'Champions', component: ChampCollectionComponent},
  {path: 'Inventory', component: RaidCollectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

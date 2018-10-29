import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent } from './cards/cards/cards.component';
import { ScoresComponent } from './scores/scores.component';

const routes: Routes = [
  { path: 'cards', component: CardsComponent },
  { path: 'scores', component: ScoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

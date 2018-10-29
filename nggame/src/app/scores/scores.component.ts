import { Component, OnInit, Input } from '@angular/core';
import { CardsComponent } from '../cards/cards/cards.component';


@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  
})
export class ScoresComponent implements OnInit {

  scores: any[];
  username: any;
  
  constructor() {

  this.scores = JSON.parse( localStorage.getItem('scores') );
    

   }

  ngOnInit() {
  }

}

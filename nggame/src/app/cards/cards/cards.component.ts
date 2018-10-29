import { Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  
})
export class CardsComponent implements OnInit {
  UserScores: any[];
  cardTypes: any[];
  cards: any[];
  click: number;
  score: any;
  previousCard: any;
  solved: any[];
  playerName: string = '';
  
  startTimer: boolean;
  seconds: number;
  minutes: number;
  counter: any;

  constructor() {
    
    this.cardTypes = [
      "fa fa-shopping-cart",
      "fa fa-address-card",
      "fa fa-address-book",
      "fa fa-500px",
      "fa fa-adjust",
      "fa fa-align-justify",
      "fa fa-adn",
      "fa fa-retweet"
    ];
    this.cards = this.shuffle(this.cardTypes.concat(this.cardTypes));
    this.cards = this.cards.map((item, i) => new Card(item, i + 1));

    this.click = 2;
    this.score = 0;
    this.solved = [];
    this.UserScores = JSON.parse(localStorage.getItem('scores'));
    if(!this.UserScores) {
      this.UserScores = [];
    }
    
    this.startTimer = false;
    this.counter;
    this.seconds = 0;
    this.minutes = 0;

    

  };

  

  startCounting() {
    this.counter = setInterval(() => {
      if(this.seconds < 60) {
      this.seconds += 1;
      } else {
        this.minutes +=1;
        this.seconds = 0;
      }
    },1000)
  }


  getClickedCard(id) {
    let x; 
    if(this.startTimer === false) {
      x = this.startCounting();  
      this.startTimer = true;
    }
    this.showCard(id);
    let clicked = this.cards[id - 1];
    let previous = this.previousCard;
    if (this.click === 2) { // first click here
      if (!this.clickedSolvedCard(id)) { // if clicked card hasn't been solved
        this.previousCard = clicked;
        this.click = 1;
      }
    } else { // second click here
      if (this.cardsMatch(id)) { // if the cards match
        this.cardsSolved(id)
        if(this.score === 8) {
          this.gameWon();
          clearInterval(this.counter);
        }
      } else {
        if (this.clickedSolvedCard(id)) { // if the clicked card has been solved
          this.hideCard(previous, 300);
        } else { // the clicked card hasn't been solved
          this.hideCard(clicked, 500);
          this.hideCard(previous, 500);
        }
      }
      this.click = 2;
    }
  }



  clickedSolvedCard(id) {
    return this.solved.includes(this.cards[id - 1].class);
  }

  hideCard(card, after) {
    setTimeout(function () {
      card.display = 'none';
    }, after);
  }

  cardsMatch(id) {
    return this.cards[id - 1].class === this.previousCard.class;
  }

  cardsSolved(id) {
    this.score++;
    this.solved.push(this.cards[id - 1].class);
    this.cards[id - 1].done = true;
    this.previousCard.done = true;
    this.cards[id - 1].bg = 'white';
    this.previousCard.bg = 'white';
  }

  gameWon(){
    this.solved = [];
    for(let i = 0; i < this.cards.length; i++){
      this.cards[i].solved = false;
      this.cards[i].bg = 'lightgrey';
      this.hideCard(this.cards[i], 500);
    }
    if(this.playerName) {
    this.updateLocal() 
    }
    this.score = '';
    this.resetTimer();
    setTimeout(function(){Swal('Good Job!')},500);

  }

  resetTimer() {
    this.seconds = 0;
    this.minutes = 0;
    this.startTimer = false;
  }

  updateLocal() {
    this.score = '0' + this.minutes + ':' + this.seconds;
    if(this.checkForPlayer()){
      this.addScoreToPlayer(this.checkForPlayer(), this.score);
    } else {
      var user = new User(this.playerName, []);
      user.scores.push(this.score);
      this.UserScores.push(user);
    }
    localStorage.setItem('scores', JSON.stringify(this.UserScores));
  }

  checkForPlayer() {
    for(var i = 0; i < this.UserScores.length; i++) {
      if(this.UserScores[i].name === this.playerName){
        return this.UserScores[i];
      }
    }
    return false;
  }

  addScoreToPlayer(userObj, score) {
    userObj.scores.push(score);
  }


  showCard(id) {
    this.cards[id - 1].display = 'block';
  }

  hideCards(id) {

  }

  getUser(name) {
    this.playerName = name;
  }

  shuffle(arr) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
      var randInt = Math.floor(Math.random() * arr.length);
      res.splice(randInt, 0, arr[i]);
    }
    return res;
  }

  ngOnInit() {
    
  }

  getCards(): void {

  }
}

class User {
  name: any;
  scores: any[];
  constructor(name, scores) {
    this.name = name;
    this.scores = [];
  }
}

class Card {
  display: any;
  class: any;
  id: number;
  done: boolean;
  bg: string;
  constructor(card, id) {
    this.class = card;
    this.id = id;
    this.display = 'none';
    this.done = false;
    this.bg = 'lightgray' 
  }
}


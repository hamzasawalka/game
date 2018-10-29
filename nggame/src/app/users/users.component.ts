import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-users',
  styleUrls: ['./users.component.css'],
  template: `
  <input #user placeholder="Enter your name" (blur)="getUser(user.value)" />
  `
})
@Injectable()
export class UsersComponent implements OnInit {

  user: string = '';
   
  constructor() { }

  ngOnInit() {
  }

  @Output() sendUser = new EventEmitter();
  

  getUser(name) {
    this.user = name
    this.sendUser.emit(this.user);
  }

}

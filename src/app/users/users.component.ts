import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  @Input() users: any
  @Output() removeUser = new EventEmitter();
  @Output() addUserEvent = new EventEmitter();

  newUserName: string = ''
   
  setNewUserName(userName: any):void {
    this.newUserName = userName.target.value;    
   }  

  addUser(): void {
    this.addUserEvent.emit(this.newUserName);
    console.log('name',this.newUserName);
    this.newUserName = '';
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}

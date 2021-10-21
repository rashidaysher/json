import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  users = [ 
    {
      id: "1", 
      name: "Max",
      age: 23
    },
    {
      id: "3",
      name: "Jack",
      age: 39
    },
    {
      id: "5",
      name: "Amisa",
      age: 30
    },
  ]
  constructor(private http: HttpClient) {}
  ngOnit(): void{
    console.log('ngOnit');
    this.http.get('http://localhost:3000/posts').subscribe(res => {
     
      console.log('res', res)
      
      
    })  

  }
  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !==id)
    
  }

  addUser(name: string): void {
    console.log('addUser parent', name)
    const uniqueId = Math.random().toString(16)
    const newUser = {
      id: uniqueId,
      name: name,
      age: 70
    }

    this.users.push(newUser)
   
  }

}

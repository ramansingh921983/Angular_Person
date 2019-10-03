import { PersonDataService } from './../service/data/person-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Person {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public age: number
  ){

  }
}

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: Person[]

  message: string


  constructor(
    private personService:PersonDataService,
    private router : Router
  ) { }

  ngOnInit() {
    this.refreshUsers();
  }

  refreshUsers(){
    this.personService.retrieveAllUsers().subscribe(
      response => {
        console.log(response);
        this.users = response;
      }
    )
  }

  
}

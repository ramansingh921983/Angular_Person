import { API_URL } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../../list-users/list-users.component';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllUsers() {
    return this.http.get<Person[]>(`${API_URL}/users`);
    console.log("Execute Hello World Bean Service")
  }

  retrievePerson(username){
      console.log("Execute Hello World Bean Service" + username + `${API_URL}/users/${username}`)

    return this.http.get<Person>(`${API_URL}/users/${username}`);
  }

  

}

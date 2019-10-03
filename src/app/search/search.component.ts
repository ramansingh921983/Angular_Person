import { Component, OnInit } from '@angular/core';
import { PersonDataService } from './../service/data/person-data.service';
import { Person } from '../list-users/list-users.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {



  test:string;
  person: Person;
  success : boolean =false;



  constructor(    private personService: PersonDataService,
      private router: Router) { }

  ngOnInit() {
  this.test="Raman";
    console.log("Hello");

  
  }
  
  
  search() {
  
  console.log("Hello");
  
  
  this.personService.retrievePerson(this.test)
          .subscribe (
             response => {
        console.log("oooooooooo"+response.firstName + response.lastName);
        this.person = response;
		this.success=true;
      }
			
          )
  
  
  
  
  
  
    
  }

}

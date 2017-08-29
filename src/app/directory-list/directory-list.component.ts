import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  personList: Person[] = [];
  selectedPerson: Person;

  constructor(public personService: PersonService) { }

  ngOnInit() {
    this.personList = this.personService.getPersons();
    this.selectedPerson = this.personList[0];
    this.onSelectPerson(this.selectedPerson);
  }

  onSelectPerson(person: Person) {
    this.personService.selectedPerson(person);
    this.selectedPerson = person;
  }

}

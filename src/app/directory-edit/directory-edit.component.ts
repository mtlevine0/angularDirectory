import { Component, OnInit } from '@angular/core';

import { Person } from '../person.model';
import { PersonService } from '../person.service';

import { DirectoryModalComponent } from '../directory-modal/directory-modal.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-directory-edit',
  templateUrl: './directory-edit.component.html',
  styleUrls: ['./directory-edit.component.css']
})
export class DirectoryEditComponent implements OnInit {
  selectedPerson: Person;
  // tst: Subscription
  
  constructor(public personService: PersonService) {
    this.personService.selectionEmitter.subscribe(
      (person: Person) => {
        // console.log(person);
        this.selectedPerson = person;
      }
    );
   }

  ngOnInit() {

  }

}

import { Output, EventEmitter } from '@angular/core';

import { Person } from './person.model';
import { MOCKPERSON } from './person.mock'

export class PersonService {
    @Output()
    public selectionEmitter: EventEmitter<Person> = new EventEmitter<Person>();

    getPersons(): Person[] {
        return MOCKPERSON.slice();
    }

    addPerson(person: Person) {
        MOCKPERSON.push(person);
    }

    selectedPerson(person: Person) {
        this.selectionEmitter.emit(person);
        console.log(person);
    }
}
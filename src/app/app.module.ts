import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { DirectoryEditComponent } from './directory-edit/directory-edit.component';

import { PersonService } from './person.service';
import { DirectoryModalComponent } from './directory-modal/directory-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectoryListComponent,
    DirectoryEditComponent,
    DirectoryModalComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [PersonService],
  bootstrap: [AppComponent],
})
export class AppModule { }

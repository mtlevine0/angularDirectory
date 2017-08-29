import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryEditComponent } from './directory-edit.component';

describe('DirectoryEditComponent', () => {
  let component: DirectoryEditComponent;
  let fixture: ComponentFixture<DirectoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryModalComponent } from './directory-modal.component';

describe('DirectoryModalComponent', () => {
  let component: DirectoryModalComponent;
  let fixture: ComponentFixture<DirectoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfJobSeekerComponent } from './list-of-job-seeker.component';

describe('ListOfJobSeekerComponent', () => {
  let component: ListOfJobSeekerComponent;
  let fixture: ComponentFixture<ListOfJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

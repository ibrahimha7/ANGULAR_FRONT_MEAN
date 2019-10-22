import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAsRecruiterComponent } from './register-as-recruiter.component';

describe('RegisterAsRecruiterComponent', () => {
  let component: RegisterAsRecruiterComponent;
  let fixture: ComponentFixture<RegisterAsRecruiterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterAsRecruiterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAsRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

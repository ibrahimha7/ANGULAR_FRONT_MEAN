import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsJobSeekerComponent } from './login-as-job-seeker.component';

describe('LoginAsJobSeekerComponent', () => {
  let component: LoginAsJobSeekerComponent;
  let fixture: ComponentFixture<LoginAsJobSeekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsJobSeekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

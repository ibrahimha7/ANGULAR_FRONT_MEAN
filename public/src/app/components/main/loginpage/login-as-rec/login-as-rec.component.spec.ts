import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsRecComponent } from './login-as-rec.component';

describe('LoginAsRecComponent', () => {
  let component: LoginAsRecComponent;
  let fixture: ComponentFixture<LoginAsRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAsRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StutusLineComponent } from './stutus-line.component';

describe('StutusLineComponent', () => {
  let component: StutusLineComponent;
  let fixture: ComponentFixture<StutusLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StutusLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StutusLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

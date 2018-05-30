import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionesComponent } from './expansiones.component';

describe('ExpansionesComponent', () => {
  let component: ExpansionesComponent;
  let fixture: ComponentFixture<ExpansionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

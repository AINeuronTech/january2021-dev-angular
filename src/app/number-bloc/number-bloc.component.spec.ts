import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberBlocComponent } from './number-bloc.component';

describe('NumberBlocComponent', () => {
  let component: NumberBlocComponent;
  let fixture: ComponentFixture<NumberBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberBlocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodniInputComponent } from './tipodni-input.component';

describe('TipodniInputComponent', () => {
  let component: TipodniInputComponent;
  let fixture: ComponentFixture<TipodniInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipodniInputComponent]
    });
    fixture = TestBed.createComponent(TipodniInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

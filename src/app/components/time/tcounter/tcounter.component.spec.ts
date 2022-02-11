import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcounterComponent } from './tcounter.component';

describe('TcounterComponent', () => {
  let component: TcounterComponent;
  let fixture: ComponentFixture<TcounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

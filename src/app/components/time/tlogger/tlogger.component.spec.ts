import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TloggerComponent } from './tlogger.component';

describe('TloggerComponent', () => {
  let component: TloggerComponent;
  let fixture: ComponentFixture<TloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TloggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

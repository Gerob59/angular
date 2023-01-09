import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteButtonComponent } from './alerte-button.component';

describe('AlerteButtonComponent', () => {
  let component: AlerteButtonComponent;
  let fixture: ComponentFixture<AlerteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlerteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

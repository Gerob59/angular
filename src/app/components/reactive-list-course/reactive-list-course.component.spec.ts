import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListCourseComponent } from './reactive-list-course.component';

describe('ReactiveListCourseComponent', () => {
  let component: ReactiveListCourseComponent;
  let fixture: ComponentFixture<ReactiveListCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveListCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

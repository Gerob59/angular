import { Component } from '@angular/core';

@Component({
  selector: 'app-data-courses',
  templateUrl: './data-courses.component.html',
  styleUrls: ['./data-courses.component.scss'],
})
export class DataCoursesComponent {
  courses: any[] = [];

  addCourse(course: any): void {
    this.courses.push(course);
  }

  get total(): number {
    return this.courses.reduce((total, course) => total + course.prix, 0);
  }
}

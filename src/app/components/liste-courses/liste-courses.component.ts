import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-courses',
  templateUrl: './liste-courses.component.html',
  styleUrls: ['./liste-courses.component.scss'],
})
export class ListeCoursesComponent {
  articles: string[] = [];
  newArticle!: string;

  addArticle() {
    this.newArticle = this.newArticle.trim();
    if (!this.newArticle) {
    } else {
      this.articles.push(this.newArticle);
      this.newArticle = '';
    }
  }
}

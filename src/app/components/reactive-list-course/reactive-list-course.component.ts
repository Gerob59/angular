import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-list-course',
  templateUrl: './reactive-list-course.component.html',
  styleUrls: ['./reactive-list-course.component.scss'],
})
export class ReactiveListCourseComponent {
  articles: any[] = [];
  article!: FormGroup;

  constructor() {
    this.article = new FormGroup({
      designation: new FormControl('', Validators.minLength(3)),
      prix: new FormControl(0, [Validators.min(0), Validators.required]),
    });
  }

  addArticle() {
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }
}

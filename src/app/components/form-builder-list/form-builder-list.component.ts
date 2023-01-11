import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-list',
  templateUrl: './form-builder-list.component.html',
  styleUrls: ['./form-builder-list.component.scss'],
})
export class FormBuilderListComponent {
  articles: any[] = [];

  article: FormGroup = this.formBuilder.group({
    designation: ['', [Validators.minLength(3), Validators.required]],
    prix: [0, [Validators.min(0.01), Validators.required]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  private addArticle(): void {
    this.articles.push(this.article.value);
    this.article.reset();
    this.submitted = false;
  }

  onSubmit(): boolean {
    this.submitted = true;
    if (this.article.invalid) return false;
    this.addArticle();
    return true;
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0);
  }

  get form() {
    return this.article.controls;
  }
}

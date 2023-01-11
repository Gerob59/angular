import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-courses',
  templateUrl: './form-courses.component.html',
  styleUrls: ['./form-courses.component.scss'],
})
export class FormCoursesComponent {
  @Output()
  onAddArticle: EventEmitter<any> = new EventEmitter();

  article: FormGroup = this.formBuilder.group({
    designation: ['', [Validators.required, Validators.minLength(1)]],
    prix: ['', [Validators.required, Validators.min(0)]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  public onSubmit(): void {
    this.submitted = true;
    if (this.article.valid) {
      this.onAddArticle.emit(this.article.value);
      this.article.reset();
    } else console.log('formulaire invalide');
  }

  get form() {
    return this.article.controls;
  }
}

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent {
  users: any[] = [
    {
      nom: 'Norris',
      prenom: 'Chuck',
      email: 'chuck.norris@dieu.com',
      telephones: ['0123456789', '9876543210'],
      entreprise: 'GOD & Cie',
    },
  ];

  userForm: FormGroup = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(1)]],
    prenom: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    telephones: this.formBuilder.array([
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    ]),
    entreprise: ['', [Validators.required, Validators.minLength(1)]],
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  public addUser(): void {
    this.users.push(this.userForm.value);
    this.userForm.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.userForm.valid) this.addUser();
  }

  /**
   *
   */
  public get form() {
    return this.userForm.controls;
  }

  /**
   * Méthode pour controller
   */
  public get telephones(): FormArray {
    return this.userForm.get('telephones') as FormArray;
  }

  /**
   * Méthode pour ajouter un champ téléphone
   */
  public addTelephone(): void {
    this.telephones.push(
      this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    );
  }

  /**
   * Méthode pour supprimer un champ téléphone
   */
  public removeTelephone(): void {
    this.telephones.removeAt(this.telephones.length - 1);
  }
}

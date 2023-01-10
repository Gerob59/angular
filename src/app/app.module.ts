import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { AlerteButtonComponent } from './components/alerte-button/alerte-button.component';
import { ListComponent } from './components/list/list.component';
import { MagieComponent } from './components/magie/magie.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { BoutonGeneriqueComponent } from './components/bouton-generique/bouton-generique.component';
import { BoutonMenuComponent } from './components/bouton-menu/bouton-menu.component';
import { ListeCoursesComponent } from './components/liste-courses/liste-courses.component';
import { ReactiveListCourseComponent } from './components/reactive-list-course/reactive-list-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    AlerteButtonComponent,
    ListComponent,
    MagieComponent,
    FilterListComponent,
    BoutonGeneriqueComponent,
    BoutonMenuComponent,
    ListeCoursesComponent,
    ReactiveListCourseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

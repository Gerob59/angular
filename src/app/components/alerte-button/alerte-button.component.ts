import { Component } from '@angular/core';

@Component({
  selector: 'app-alerte-button',
  templateUrl: './alerte-button.component.html',
  styleUrls: ['./alerte-button.component.scss'],
})
export class AlerteButtonComponent {
  totoQuiClick() {
    alert('toto a tout pété !!!');
  }
}

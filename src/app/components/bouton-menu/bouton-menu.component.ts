import { Component } from '@angular/core';

@Component({
  selector: 'app-bouton-menu',
  templateUrl: './bouton-menu.component.html',
  styleUrls: ['./bouton-menu.component.scss'],
})
export class BoutonMenuComponent {
  boutons: any[] = [
    {
      text: 'Ping',
      message: 'Pong',
    },
    {
      text: 'Marco',
      message: 'Polo',
    },
    {
      text: 'Philippe',
      message: 'Je sais où tu te cache !',
    },
  ];
}

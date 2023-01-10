import { Component } from '@angular/core';

@Component({
  selector: 'app-bouton-menu',
  templateUrl: './bouton-menu.component.html',
  styleUrls: ['./bouton-menu.component.scss'],
})
export class BoutonMenuComponent {
  boutons: any[] = [
    {
      boutonTexte: 'Ping',
      alerteMessage: 'Pong',
    },
    {
      boutonTexte: 'Marco',
      alerteMessage: 'Polo',
    },
    {
      boutonTexte: 'Philippe',
      alerteMessage: 'Je sais où tu te cache !',
    },
  ];
}

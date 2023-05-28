import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Pesquise seu Pokemon no card abaixo!</h3>
  <app-card></app-card>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
}

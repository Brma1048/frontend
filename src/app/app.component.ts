import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container">
    <app-nav></app-nav>

    <app-main></app-main>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

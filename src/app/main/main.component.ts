import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
  <main>
    <div class="col col-8">
      <router-outlet></router-outlet>
    </div>
  </main>
  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

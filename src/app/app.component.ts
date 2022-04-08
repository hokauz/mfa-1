import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // inputs
  // outputs
  title = 'mfa1';

  constructor() {
    this.load();
  }

  load() {
    // inject script url web component
    // define tag
  }
}

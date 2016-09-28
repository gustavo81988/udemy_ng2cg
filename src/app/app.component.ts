import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-databinding></fa-databinding>
  `
})
export class AppComponent {
  title = 'I changed it!';
}
  
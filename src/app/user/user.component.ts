import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Component</h1>
    <button (click) = "onNavigate()">Go home</button>
  `,
  styles: []
})
export class UserComponent {

  constructor(private router: Router) { }

  public onNavigate(): void{
    this.router.navigate(['/']);
  }

}

import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private switch = true;
  private items  = [1,2,3,4,5];
  private value  = 100;

  public onSwitch(): void{
    this.switch = !this.switch;
  }
}

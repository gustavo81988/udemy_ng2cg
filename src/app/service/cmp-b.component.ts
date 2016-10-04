import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'si-cmp-b',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onStore(input.value)">Store</button>
      <button (click)="onSend(input.value)">Send</button>
    </div>
    <hr>
    <div>
        <button (click)="onGet()">Refresh Storage</button>
        <h3>Storage</h3>
        <ul>
            <li *ngFor="let item of items">{{item}}</li>
        </ul>
        <h3>Received Value</h3>
        <p>{{value}}</p>
    </div>
  `,
  providers: [LogService]
})
export class CmpBComponent {
    
  value = '';

  constructor(private logService: LogService){}

  public onLog(value: string): void{
    this.logService.writeToLog(value);
  };

}

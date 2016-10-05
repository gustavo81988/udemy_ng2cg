import { LogService } from './log.service';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class DataService {

  private data: string[] = [];
  public pushedData = new EventEmitter<string>();

  constructor (private logService: LogService){}

  public addData(input: string): void{
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  public getData(): string[]{
    return this.data;
  }

  public pushData(value: string): void {
    this.pushedData.emit(value);
  }

}
    
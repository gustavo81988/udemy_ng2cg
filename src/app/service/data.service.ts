import { LogService } from './log.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  private data: string[] = [];

  constructor (private logService: LogService){}

  public addData(input: string): void{
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  public getData(): string[]{
    return this.data;
  }

}
    
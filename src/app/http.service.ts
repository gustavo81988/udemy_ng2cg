import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  public getData(){
    return this.http.get('https://udemy-ng2cg.firebaseio.com/title.json');
  }

}

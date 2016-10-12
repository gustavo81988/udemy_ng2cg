import { Component, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-user',
  template: `
    <h1>User Component</h1>
    <button (click) = "onNavigate()">Go home</button>
    <hr>
    {{id}}
  `
})
export class UserComponent implements OnDestroy{

  private subscription: Subscription;
  public id: string;

  constructor(private router: Router, private activatedRoute:ActivatedRoute) { 
    //this.id = activatedRoute.snapshot.params['id'];
    activatedRoute.params.subscribe(
      (param: any) => this.id = param['id'] 
    );
  }

  public onNavigate(): void{
    this.router.navigate(['/']);
  }

  //prevents memory leaks
  public ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}

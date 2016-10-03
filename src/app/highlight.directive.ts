import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseover(){
    this.backgroundColor= this.highlightColor;
  };

  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor= this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  };

  @Input() defaultColor= 'white';
  @Input('highlight') highlightColor= 'green';

  private backgroundColor = this.defaultColor;

  constructor() {
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','green') 
  }

  public ngOnInit(): void{
    this.backgroundColor = this.defaultColor;
  }

}

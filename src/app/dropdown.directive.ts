import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {

  private isOpen = false

  @HostBinding('class.open') get opened() : boolean{
    return this.isOpen;
  }

  @HostListener('click') open(): void{
    this.isOpen = true;
  }

  @HostListener('mouseleave') close(): void{
    this.isOpen = false;
  }

}

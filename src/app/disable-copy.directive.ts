import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCopy]',
  standalone: true,
})
export class NoCopyDirective {
  @HostListener('copy', ['$event'])
  @HostListener('paste', ['$event'])
  blockEvent(event: Event) {
    event.preventDefault();
  }
}

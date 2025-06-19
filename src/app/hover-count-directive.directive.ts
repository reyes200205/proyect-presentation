import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appClickCount]',
  standalone: true,
})
export class ClickCountDirective {
  private clickCount = signal(0);
  private originalText: string;

  constructor(private el: ElementRef<HTMLElement>) {
    this.originalText = this.el.nativeElement.textContent?.trim() || '';
  }

  @HostBinding('innerText')
  get displayText(): string {
    const c = this.clickCount();
    return c > 0
      ? `${this.originalText} (Clicked ${c} time${c > 1 ? 's' : ''})`
      : this.originalText;
  }

  @HostListener('click')
  onClick() {
    this.clickCount.update((n) => n + 1);
  }
}

import { UppercaseDirective } from './app-uppercase.directive';
import { ElementRef } from '@angular/core';

describe('UppercaseDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('input') } as ElementRef;
    const directive = new UppercaseDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
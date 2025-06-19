import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { UppercaseDirective } from '../app-uppercase.directive';
import { NoCopyDirective } from '../disable-copy.directive';
import { ClickCountDirective } from '../hover-count-directive.directive';
@Component({
  selector: 'app-pruebamisa',
  imports: [
    HighlightDirective,
    UppercaseDirective,
    NoCopyDirective,
    ClickCountDirective,
  ],
  templateUrl: './pruebamisa.component.html',
  styleUrl: './pruebamisa.component.css',
})
export class PruebamisaComponent {}

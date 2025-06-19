import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { UppercaseDirective } from '../app-uppercase.directive';

@Component({
  selector: 'app-pruebamisa',
  imports: [HighlightDirective, UppercaseDirective],
  templateUrl: './pruebamisa.component.html',
  styleUrl: './pruebamisa.component.css',
})
export class PruebamisaComponent {}

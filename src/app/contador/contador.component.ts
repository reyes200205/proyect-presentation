import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para directivas como *ngIf

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para *ngIf
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  decrementar() {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  reiniciar() {
    this.contador = 0;
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para *ngFor
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule], // Añade CommonModule y FormsModule
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  tareas: string[] = ['Estudiar Angular', 'Hacer ejercicio'];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push(this.nuevaTarea.trim());
      this.nuevaTarea = '';
    }
  }
}
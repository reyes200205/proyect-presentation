import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Mouse', estado: 'activo' },
    { id: 2, nombre: 'Teclado', estado: 'inactivo' },
    { id: 3, nombre: 'Monitor', estado: 'activo' }
  ];
}

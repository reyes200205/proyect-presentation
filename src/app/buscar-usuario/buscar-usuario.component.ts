import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


interface Usuario {
    id: number;
    name: string;
    username: string;
    email: string;
  }

@Component({
  selector: 'app-buscar-usuario',
  imports: [CommonModule, FormsModule],
  templateUrl: './buscar-usuario.component.html',
  styleUrl: './buscar-usuario.component.css'
})
export class BuscarUsuarioComponent {

  nombre: string = '';
  usuarios: any[] = [];
  error: string = '';
  cargando: boolean = false;

  constructor( private http: HttpClient) { }


  buscarUsuario() {
    this.error = '';
    if(this.nombre.trim().length < 3) {
      this.error = 'El nombre debe tener al menos 3 caracteres';
      this.usuarios = [];
      return;
    }
    this.cargando = true;
    this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (res) => {
        this.usuarios = res.filter(user =>
          user.name.toLowerCase().includes(this.nombre.toLowerCase())
        );
        if(this.usuarios.length === 0) {
          this.error = 'No se encontraron usuarios';
        }
        this.cargando = false;
      },
      error: (err) => {
        this.error = err.message;
        this.cargando = false;
      }
    })
  }
}

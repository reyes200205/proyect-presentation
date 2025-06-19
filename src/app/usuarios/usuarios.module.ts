import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { BuscarUsuarioComponent } from './pages/buscar-usuario/buscar-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule 
  ]
})
export class UsuariosModule { }

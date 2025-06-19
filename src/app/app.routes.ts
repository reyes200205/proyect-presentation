import { Routes } from '@angular/router';
import { PruebamisaComponent } from './pruebamisa/pruebamisa.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';

export const routes: Routes = [
  {
    path: 'misael',
    component: PruebamisaComponent,
  },
  {
    path: 'buscar',
    component: BuscarUsuarioComponent
  }
];

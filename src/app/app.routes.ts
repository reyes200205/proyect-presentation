import { Routes } from '@angular/router';
import { PruebamisaComponent } from './pruebamisa/pruebamisa.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { TareaComponent } from './tarea/tarea.component';
import { ContadorComponent } from './contador/contador.component';

export const routes: Routes = [
  {
    path: 'misael',
    component: PruebamisaComponent,
  },
  {
    path: 'buscar',
    component: BuscarUsuarioComponent
  },
  {
    path: 'tarea',
    component: TareaComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  }
];

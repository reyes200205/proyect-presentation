import { Routes } from '@angular/router';
import { PruebamisaComponent } from './pruebamisa/pruebamisa.component';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
  {
    path: 'misael',
    component: PruebamisaComponent,
  },
];

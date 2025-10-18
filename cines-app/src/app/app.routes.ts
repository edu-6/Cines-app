import { Routes } from '@angular/router';
import { InicioSesion } from '../pages/inicio-sesion/inicio-sesion';
import { NuevoUsuarioPage } from '../pages/usuario/nuevo-usuario-page/nuevo-usuario-page';
import { HomePage } from '../pages/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'login',
        component: InicioSesion
    },
    {
        path: 'user/new',
        component: NuevoUsuarioPage,
    }
];

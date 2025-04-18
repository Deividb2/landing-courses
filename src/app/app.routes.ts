import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "GUIA PRÁTICO PARA SAIR DO DESEMPREGO RÁPIDO",
    },
    {
        path: '**',
        loadComponent: () => import('./pages/error/error.component').then((page) => page.ErrorComponent)
    }
];
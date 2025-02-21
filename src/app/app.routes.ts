import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'serie-detail',
    loadComponent: () => import('./pages/serie-detail/serie-detail.page').then( m => m.SerieDetailPage)
  },
];

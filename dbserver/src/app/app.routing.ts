import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

import { DatabaseComponent } from './database/database.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    // {
    //     path: '**',
    //     component: NotFound
    // },
    {
        path: 'login',
        component: LoginComponent,
        // data: { state: 'login' }
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'database',
        component: DatabaseComponent
    }
];

export const AppRouting = RouterModule.forRoot(routes, {
    useHash: false
});

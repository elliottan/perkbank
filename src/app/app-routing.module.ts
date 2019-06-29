import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSelectComponent } from './login-select/login-select.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'login',
    },
    {
        path      : 'dashboard',
        component : DashboardComponent,
        canActivate: [AuthGuard]
 
    },
    {
        path      : 'login-select',
        component : LoginSelectComponent
    },
    {
        path      : 'login',
        component : LoginComponent
    }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

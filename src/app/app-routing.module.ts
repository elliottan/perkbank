import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginSelectComponent } from './login-select/login-select.component';
import { LoginComponent } from './login/login.component';
import { OtpCheckComponent } from './otp-check/otp-check.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewPaymentRequestComponent } from './new-payment-request/new-payment-request.component';
import { DraftPaymentRequestComponent } from './draft-payment-request/draft-payment-request.component';

const routes: Routes = [
  {
      path      : '',
      pathMatch : 'full',
      redirectTo: 'dashboard',
  },
  {
      path      : 'login-select',
      component : LoginSelectComponent
  },
  {
      path      : 'login',
      component : LoginComponent
  },
  {
      path      : 'register',
      component : RegisterComponent
  },
  {
      path      : 'otp-check',
      component : OtpCheckComponent
  },
  {
      path      : 'dashboard',
      component : DashboardComponent,
      canActivate: [AuthGuard]
  },
  {
      path      : 'new-payment-request',
      component : NewPaymentRequestComponent,
      canActivate: [AuthGuard]
  },
  {
      path      : 'draft-payment-request',
      component : DraftPaymentRequestComponent,
      canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

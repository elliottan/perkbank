import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from '@angular/common';

import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSelectComponent } from './login-select/login-select.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtpCheckComponent } from './otp-check/otp-check.component';
import { RegisterComponent } from './register/register.component';
import { NewPaymentRequestComponent } from './new-payment-request/new-payment-request.component';
import { DraftPaymentRequestComponent } from './draft-payment-request/draft-payment-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSelectComponent,
    LoginComponent,
    DashboardComponent,
    OtpCheckComponent,
    RegisterComponent,
    NewPaymentRequestComponent,
    DraftPaymentRequestComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

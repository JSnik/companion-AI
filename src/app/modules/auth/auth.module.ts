import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../main/main.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ReactiveFormsModule} from "@angular/forms";
import {GoogleSigninButtonModule} from "@abacritt/angularx-social-login";
import { SuccessComponent } from './success/success.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {ShowHidePasswordDirective} from "../shared/click.directive";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
]

@NgModule({
  declarations: [ShowHidePasswordDirective, LoginComponent, RegisterComponent, ForgotPasswordComponent, SuccessComponent, ResetPasswordComponent, ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        GoogleSigninButtonModule,

    ],

})
export class AuthModule { }

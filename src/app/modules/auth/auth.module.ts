import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "../main/main.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
]

@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
    ],

})
export class AuthModule { }

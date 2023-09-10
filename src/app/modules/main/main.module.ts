import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';

import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  {path: '', component: MainComponent}
]

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  providers: [],
})
export class MainModule { } 

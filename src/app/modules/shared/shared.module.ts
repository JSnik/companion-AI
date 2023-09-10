import { NgModule } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/foooter.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { loaderComponent } from './loader/loader.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    loaderComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    loaderComponent,
    SliderComponent
  ],
  providers: [],
})
export class SharedModule { }

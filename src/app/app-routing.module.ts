import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { StudentsComponent } from './components/students/students.component';
import { TdisplayComponent } from './components/time/tdisplay/tdisplay.component';
import { DisplayComponent } from './components/timer/display/display.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'route1', component: BannerComponent},
  { path: 'route2', component: ProductsComponent},
  { path: 'route3', component: DisplayComponent},
  { path: 'route4', component: TdisplayComponent},
  { path: 'route5', component: StudentsComponent},
  { path: 'route6', component: DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlotPageComponent } from './pages/plot-page/plot-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'plot', component: PlotPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

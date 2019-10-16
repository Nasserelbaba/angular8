import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherwidgetComponent } from './weatherwidget/weatherwidget.component';


const routes: Routes = [
  {path:"weatherwidget",component:WeatherwidgetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

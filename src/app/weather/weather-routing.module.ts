import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuardFn } from '../auth/auth-guard';
import { WeatherComponent } from './weather.component';

const route: Routes = [
  { path: '', component: WeatherComponent, canActivate: [authGuardFn] },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}

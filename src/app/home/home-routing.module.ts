import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { authGuardFn } from '../auth/auth-guard';

const route: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuardFn]},
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreferenceComponent } from './preference.component';
import { authGuardFn } from '../auth/auth-guard';

const route: Routes = [
  { path: '', component: PreferenceComponent, canActivate: [authGuardFn]},
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PreferenceRoutingModule {}

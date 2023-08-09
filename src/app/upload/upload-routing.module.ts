import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { authGuardFn } from '../auth/auth-guard';

const route: Routes = [
  { path: '', component: UploadComponent, canActivate: [authGuardFn]},
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UploadRoutingModule {}

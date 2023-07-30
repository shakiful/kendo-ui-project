import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'about', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },
  // { path: 'contacts', loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule) },


  // { path: 'not-found', component: ShoppingListComponent },
  // { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

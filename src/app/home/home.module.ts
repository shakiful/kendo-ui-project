import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule,HomeRoutingModule, LayoutModule],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule,HomeRoutingModule, LayoutModule, GridModule],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { SharedModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  declarations: [WeatherComponent],
  imports: [SharedModule, FormsModule, RouterModule, WeatherRoutingModule, LayoutModule, GridModule],
})
export class WeatherModule {}

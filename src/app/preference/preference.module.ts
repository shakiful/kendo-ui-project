import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreferenceComponent } from './preference.component';
import { PreferenceRoutingModule } from './preference-routing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  declarations: [PreferenceComponent],
  imports: [RouterModule,PreferenceRoutingModule, LayoutModule, GridModule],
})
export class PreferenceModule {}

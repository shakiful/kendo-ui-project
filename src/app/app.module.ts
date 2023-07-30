import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HeaderComponent } from './header/header.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { IconsModule } from "@progress/kendo-angular-icons";
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateInputsModule,
    BrowserAnimationsModule,
    GridModule,
    DropDownsModule,
    HttpClientModule,
    NavigationModule,
    IconsModule,
    IndicatorsModule,
    ButtonsModule,
    HomeModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

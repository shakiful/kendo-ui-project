import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UploadInterceptor } from './upload.interceptor';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    BrowserModule,
    RouterModule,
    UploadRoutingModule,
    LayoutModule,
    GridModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    UploadsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true,
    },
  ],
})
export class UploadModule {}

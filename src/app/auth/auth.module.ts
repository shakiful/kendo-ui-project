import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputsModule, TextBoxModule } from '@progress/kendo-angular-inputs';
import { FloatingLabelModule, LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    ButtonsModule,
    IconsModule,
    TextBoxModule,
    FloatingLabelModule
  ],
})
export class AuthModule {}

import { ProductService } from './../product.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { SVGIcon, envelopIcon, lockIcon, userIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  onLogin: boolean = true;
  public lockIcon: SVGIcon = lockIcon;
  public envelopIcon: SVGIcon = envelopIcon;
  public userIcon: SVGIcon = userIcon;

  constructor(private productsService: ProductService) {}

  @ViewChild('password') public textbox: TextBoxComponent;

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

  public form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    loggedin: new FormControl(),
  });

  public login(): void {
    this.form.markAllAsTouched();
    this.productsService.isAuthenticated = true;
    console.log(this.productsService.isAuthenticated);
  }

  public register(): void {
    this.onLogin = false;
    this.form.reset();
    console.log(this.form);
  }

  public signUp(): void {}

  public onSwitch(): void {
    this.onLogin = true;
    this.form.reset();
  }

  public clearForm(): void {
    this.form.reset();
  }
}

import { products } from './../data.products';
import { ProductService } from './../product.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { SVGIcon, lockIcon, userIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public lockIcon: SVGIcon = lockIcon;
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
    username: new FormControl(),
    password: new FormControl(),
    loggedin: new FormControl(),
  });

  public login(): void {
    this.form.markAllAsTouched();
    this.productsService.isAuthenticated = true;
    console.log(this.productsService.isAuthenticated);
  }

  public clearForm(): void {
    this.form.reset();
  }
}

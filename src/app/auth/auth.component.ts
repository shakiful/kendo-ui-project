import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import {
  SVGIcon,
  arrowDownIcon,
  envelopIcon,
  lockIcon,
  userIcon,
} from '@progress/kendo-svg-icons';
import { AuthResponseData, AuthService } from './auth.service';
import { NotificationService } from '@progress/kendo-angular-notification';
import { UserRoles } from './user.enum.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  isLoading = false;
  error = false;
  isLogInMode: boolean = true;
  public lockIcon: SVGIcon = lockIcon;
  public envelopIcon: SVGIcon = envelopIcon;
  public userIcon: SVGIcon = userIcon;
  public downArrow: SVGIcon = arrowDownIcon;

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  @ViewChild('password') public textbox: TextBoxComponent;

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = 'password';
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
  }

  public form: FormGroup = new FormGroup({
    role: new FormControl(),
    email: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    loggedIn: new FormControl(),
  });

  public login(form) {
    if (!form.valid) {
      return;
    }
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    const role = form.value.role;
    const loggedIn = form.value.loggedIn;

    console.log(form.value.role);

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    if (this.isLogInMode) {
      authObs = this.authService.login(username, password);
      this.authService.setLoggedIn(loggedIn);
    } else {
      authObs = this.authService.signup(username, email, password, role);
    }

    authObs.subscribe({
      next: (data) => {
        console.log(loggedIn);
        console.log(data);
        this.isLoading = false;
        this.router.navigate(['/home']);
        if (this.error == false) {
          if (this.isLogInMode) {
            this.notificationService.show({
              content: 'Successfully Logged in',
              hideAfter: 900,
              position: { horizontal: 'center', vertical: 'top' },
              animation: { type: 'fade', duration: 400 },
              type: { style: 'success', icon: true },
            });
          } else {
            this.notificationService.show({
              content: 'Successfully Signed Up',
              hideAfter: 900,
              position: { horizontal: 'center', vertical: 'top' },
              animation: { type: 'fade', duration: 400 },
              type: { style: 'success', icon: true },
            });
            this.isLogInMode = true
          }
        }
      },
      error: (errorMessage) => {
        console.log(errorMessage);
        if (this.isLogInMode) {
          this.notificationService.show({
            content: errorMessage,
            hideAfter: 900,
            position: { horizontal: 'center', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'error', icon: true },
          });
        } else {
          const errors = errorMessage.join(', ');
          this.notificationService.show({
            content: errors,
            hideAfter: 900,
            position: { horizontal: 'center', vertical: 'top' },
            animation: { type: 'fade', duration: 400 },
            type: { style: 'error', icon: true },
          });
        }

        this.error = true;
        this.isLoading = false;
      },
    });

    console.log(this.error);

    form.reset();
  }

  public register(): void {
    this.isLogInMode = false;
    this.form.reset();
    console.log(this.form);
  }

  public signUp(form): void {
    this.login(form);
  }

  public onSwitch(): void {
    this.isLogInMode = true;
    this.form.reset();
  }

  public clearForm(): void {
    this.form.reset();
  }

  roleArray = Object.keys(UserRoles)
    .map((key) => UserRoles[key])
    .filter((key) => isNaN(Number(key)));
}

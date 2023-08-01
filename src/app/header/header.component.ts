import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppBarThemeColor } from '@progress/kendo-angular-navigation';
import {
  SVGIcon,
  arrowDownIcon,
  bellIcon,
  menuIcon,
} from '@progress/kendo-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}

  users: any[];
  access: string;

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  private userSub: Subscription;
  isAuthenticated: boolean = false;

  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public downArrow: SVGIcon = arrowDownIcon;
  public themeColors: Array<AppBarThemeColor> = ['dark'];

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      this.access = user.role.toString();
    });
  }

  onLogout() {
    this.authService.logout();
  }

  onRetrieveUsers() {
    this.authService.retrieveUsers().subscribe((users) => {
      this.users = users;
      console.log(users);
    });
  }

  data = [
    {
      text: 'My Profile',
    },
    {
      text: 'Friend Requests',
    },
    {
      text: 'Account Settings',
    },
    {
      text: 'Support',
    },
    {
      text: 'Log Out',
    },
  ];
}

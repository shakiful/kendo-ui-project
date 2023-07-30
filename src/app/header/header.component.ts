import { Component, ViewEncapsulation } from '@angular/core';
import { AppBarThemeColor } from '@progress/kendo-angular-navigation';
import { SVGIcon, arrowDownIcon, bellIcon, menuIcon } from '@progress/kendo-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  encapsulation: ViewEncapsulation.None;

  isAuthorized:boolean = false;

  public menuIcon: SVGIcon = menuIcon;
  public bellIcon: SVGIcon = bellIcon;
  public downArrow: SVGIcon = arrowDownIcon;
  public themeColors: Array<AppBarThemeColor> = ['dark'];


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

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Users } from './userInfo.model';
import { UserDataService } from '../auth/shared-service/UserDataService.service';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  public gridData: Users[] = [];
  public gridView: GridDataResult;

  private userDataSubscription: Subscription;

  constructor(private userDataService: UserDataService) {
    this.userDataSubscription = this.userDataService.users$.subscribe(
      (users) => {
        this.gridData = users; // Update the gridData with the users data
        this.loadItems(); // Reload the grid items when users data changes
      }
    );
  }

  ngOnDestroy(): void {
    this.userDataSubscription.unsubscribe();
  }

  public pageSize = 10;
  public skip = 1;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;

    this.loadItems();
  }

  private loadItems(): void {
    const startIndex = this.skip;
    const endIndex = this.skip + this.pageSize;
    this.gridView = {
      data: this.gridData.slice(startIndex, endIndex),
      total: this.gridData.length,
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from './preferenceInfo.model';
import { GroupDescriptor, GroupResult, groupBy } from '@progress/kendo-data-query';
import { products } from './products';

@Component({
  selector: 'app-home',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss'],
})
export class PreferenceComponent implements OnInit {
  public groups: GroupDescriptor[] = [{ field: "SupplierID" }];

  public gridView: GroupResult[] | Product[];

  public ngOnInit(): void {
    this.loadProducts();
  }

  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = groupBy(products, this.groups);
  }
}

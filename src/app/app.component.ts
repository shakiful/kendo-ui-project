import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { categories } from "./data.categories";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private productService: ProductService) {
    this.loadGridItems();
  }

  ngOnInit(): void {}

  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  public filterTerm: number = null;

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
}

public handleFilterChange(item): void {
  this.filterTerm = item.value;
  this.skip = 0;
  this.loadGridItems();
}


public handleSortChange(descriptor: SortDescriptor[]): void {
  this.sortDescriptor = descriptor;
  this.loadGridItems();
}

private loadGridItems(): void {
  this.gridItems = this.productService.getProducts(
    this.skip,
    this.pageSize,
    this.sortDescriptor,
    this.filterTerm
  );
}

public dropDownItems = categories;
    public defaultItem = { text: "Filter by Category", value: null };





  title = 'kendo-ui-project';
}

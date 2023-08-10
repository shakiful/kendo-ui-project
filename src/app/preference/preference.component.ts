import { Component, OnInit } from '@angular/core';
import { Upload } from './preferenceInfo.model';
import { GroupDescriptor, GroupResult, groupBy } from '@progress/kendo-data-query';
import { uploadInfo } from './upload-info';

@Component({
  selector: 'app-home',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss'],
})
export class PreferenceComponent implements OnInit {
  public groups: GroupDescriptor[] = [{ field: "Age" }];

  public gridView: GroupResult[] | Upload[];

  public ngOnInit(): void {
    this.loadProducts();
  }

  public groupChange(groups: GroupDescriptor[]): void {
    this.groups = groups;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = groupBy(uploadInfo, this.groups);
  }
}

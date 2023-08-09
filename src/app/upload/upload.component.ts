import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadSaveUrl = 'saveUrl'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public min = 1;
  public max = 150;

  public enabled = false;

  public form: FormGroup = new FormGroup({
    holder: new FormControl('', Validators.required),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),

  });

  public toggle(enabled: boolean): void {
    this.enabled = enabled;
  }

  public get disabledClass(): string {
    return this.enabled ? '' : 'k-disabled';
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
    console.log(this.form.value);

  }

  public clearForm(): void {
    this.form.reset();
  }

  ngOnInit(): void {}
}

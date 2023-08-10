import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  FileInfo,
  FileRestrictions,
  SelectEvent,
  RemoveEvent,
} from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-home',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  uploadSaveUrl = 'https://v2.convertapi.com/upload'; // should represent an actual API endpoint
  uploadRemoveUrl = 'removeUrl'; // should represent an actual API endpoint

  public min = 1;
  public max = 150;
  public formValue;

  public userImages: Array<FileInfo>;

  public myRestrictions: FileRestrictions = {
    allowedExtensions: ['jpg', 'jpeg', 'png'],
  };

  public form: FormGroup = new FormGroup({
    holder: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern(/^[a-zA-Z]+$/),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d+$/),
    ]),
    avatar: new FormControl('', Validators.required),
  });

  public myFiles: any = {
    src: '',
  };

  public onSelect(ev: SelectEvent): void {
    ev.files.forEach((file: FileInfo) => {
      if (file.rawFile) {
        const reader = new FileReader();

        reader.onloadend = () => {
          this.myFiles.src = <string>reader.result;
        };

        reader.readAsDataURL(file.rawFile);
      }
    });

    console.log(this.myFiles.src);
  }

  public onRemove(ev: RemoveEvent): void {
    ev.files.forEach((file: FileInfo) => {
      this.myFiles = this.myFiles.filter((f) => f.uid !== file.uid);
    });
  }

  public submitForm(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('Form submitted successfully!', this.form.value);
      // Perform further actions, e.g., send data to a service
    }
  }

  public clearForm(): void {
    this.form.reset();
    this.myFiles = [];
  }

  ngOnInit(): void {
    this.clearForm();
  }
}

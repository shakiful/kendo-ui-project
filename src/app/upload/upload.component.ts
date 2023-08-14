import { UploadData } from './upload.model';
import { UploadService } from './upload.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FileInfo,
  FileRestrictions,
  SelectEvent,
  RemoveEvent,
} from '@progress/kendo-angular-upload';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  constructor(private router: Router, private uploadService: UploadService) {}

  uploadSaveUrl = `${environment.apiUrl}/api/blog`; // should represent an actual API endpoint
  uploadRemoveUrl =
    'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'; // should represent an actual API endpoint

  public min = 1;
  public max = 150;
  uploadData = new Array<UploadData>();
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

        console.log(reader);

        reader.onload = (e: any) => {
          console.log(e.target.result);
        };

        reader.onloadend = () => {
          this.myFiles.src = <string>reader.result;
          console.log(this.myFiles);
          console.log(this.myFiles.src);
        };

        reader.readAsDataURL(file.rawFile);
        console.log(reader.readAsDataURL(file.rawFile));
      }
    });

    console.log(this.myFiles.src);
  }

  public onRemove(ev: RemoveEvent): void {
    ev.files.forEach((file: FileInfo) => {
      this.myFiles = this.myFiles.filter((f) => f.uid !== file.uid);
    });
  }

  public submitForm(form): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const fullName = form.value.holder;
      const age = form.value.age;
      const avatar = form.value.avatar.src;

      let authObs: Observable<any>;

      authObs = this.uploadService.sendUploadData(fullName, age, avatar);

      authObs.subscribe({
        next: (data) => {
          let uploadData = new UploadData();
          uploadData.fullName = data.fullName;
          uploadData.age = data.age;
          uploadData.avatar = data.avatar;
          console.log(data);
          this.router.navigate(['/preference']);
          return uploadData
        },
      });
      form.reset();
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

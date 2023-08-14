import { Observable, catchError, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(private http: HttpClient, private router: Router) {}

  sendUploadData(fullName: string, age: string, avatar: string) {
    return this.http
      .post<any>(`${environment.apiUrl}/api/blog`, {
        fullName,
        age,
        avatar,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log(resData);
          // this.handleResData(
          //   resData.title,
          //   resData.content,
          //   resData.image,
          // );
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'an Unknown error occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMessage);
    }
    if (errorRes.status === 400) {
      errorMessage = errorRes.error.message; // properly show the error message
    }
    if (errorRes.status === 401) {
      console.log(errorRes);
      errorMessage = errorRes.message;
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email address not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
    }
    return throwError(() => errorMessage);
  }

  // private handleResData(
  //   fullName: string,
  //   age: string,
  //   avatar: string,
  // ) {
  //   const uploadResData = new uploadResData(username, email, role, id, accessToken, createdAt);
  // }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private weathersSubject = new BehaviorSubject<any[]>([]);
  public weathers$: Observable<any[]> = this.weathersSubject.asObservable();

  setUsers(weathers: any[]) {
    this.weathersSubject.next(weathers);
  }
}

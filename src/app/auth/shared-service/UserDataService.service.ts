import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  public users$: Observable<any[]> = this.usersSubject.asObservable();

  setUsers(users: any[]) {
    this.usersSubject.next(users);
  }
}

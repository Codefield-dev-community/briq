import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BriqUser } from '../briq-user';

@Injectable({
  providedIn: 'root'
})
export class BriqUserService {
  private $user: BehaviorSubject<BriqUser>;

  constructor() {
    this.$user = new BehaviorSubject<BriqUser>(null);
    this.checkLocalStorage();
  }

  public setUser(user: BriqUser, skipLocalStorage = false): void {
    this.$user.next(user);

    if (!skipLocalStorage) {
      localStorage.setItem('briq_user', JSON.stringify(user));
    }
  }

  public resetUser(): void {
    this.$user.next(null);
    localStorage.removeItem('briq_user');
  }

  public getUser$(): Observable<BriqUser> {
    return this.$user.asObservable();
  }

  public getActiveUser(): BriqUser {
    return this.$user.getValue();
  }

  public isUserLoggedIn(): any {
    return this.$user.getValue() !== null;
  }

  public hasRole(role: string): boolean {
    return this.getActiveUser()?.role === role;
  }

  private checkLocalStorage(): void {
    const user = localStorage.getItem('briq_user');
    if (user) {
      this.setUser(JSON.parse(user), false);
    }
  }
}

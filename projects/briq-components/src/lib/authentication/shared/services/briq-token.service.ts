import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BriqTokenService {
  private token: string;

  constructor() {
    this.checkLocalStorage();
  }

  getToken() {
    this.checkLocalStorage();
    return this.token;
  }

  public storeToken(token: string) {
    if (token) {
      this.token = token;
      localStorage.setItem('briq_token', token);
    }
  }

  resetToken() {
    this.token = null;
    localStorage.removeItem('briq_token');
  }

  private checkLocalStorage() {
    if (!this.token) {
      const storedToken = localStorage.getItem('briq_token');
      if (storedToken) {
        this.token = storedToken;
      }
    }
  }
}

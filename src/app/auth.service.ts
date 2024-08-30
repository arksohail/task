import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string = '';
  constructor() { }

  setUserName(username: string) {
    this.username = username;
  }
  getUserName() {
   return this.username;
  }
}

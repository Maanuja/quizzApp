import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined;
  usersLength!: number;

  constructor(private http: HttpClient) { }


  getUsers() {
    return this.http.get('http://localhost:3000/users');
  }

  getUsersLength() {
    this.getUsers().subscribe((users: any) => {
      this.usersLength = users.length;
    });

    return this.usersLength;
  }

  addUser(user: { id: number, username: string; password: string; }) {
    return this.http.post('http://localhost:3000/users', user).subscribe();
  }

  login(user: { username: string; password: string; }) {
    return this.http.get('http://localhost:3000/users?username=' + user.username + '&password=' + user.password);
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('user');
  }

  saveUser() {
    localStorage.setItem('user', '' + this.user?.id);
  }

  getSavedUserId() {
    return localStorage.getItem('user');
  }

  isUserConnected() {
    if (this.user) {
      this.saveUser();
      return true;
    } 
    else if (this.getSavedUserId()) {
      console.log('this.getSavedUser()', this.getSavedUserId());
      this.getSavedUserInfo().subscribe((u: any) => {
        // console.log('user', user[0] );

        this.user = { id: u[0].id, username: u[0].username };
        console.log('this.user', this.user);
      });
      // console.log('userssss', this.user );

      return true;
    } 
    else {
      return false;
    }
  }

  private getSavedUserInfo() {
    return this.http.get('http://localhost:3000/users?id=' + this.getSavedUserId());
  }
}

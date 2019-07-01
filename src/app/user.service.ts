import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import 'rxjs/Rx';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/users');
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>('/api/users/' + username);
  }

  insertUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users/', user);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(
      '/api/users/' + user.username,
      user
    );
  }

  deleteUser(username: string) {
    return this.http.delete('/api/users/' + username);
  }
}

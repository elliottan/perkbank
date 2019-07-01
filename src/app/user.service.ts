import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

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
    return this.http.get<User[]>('http://localhost:8000/api/users')
  }

  getUser(username: string): Observable<User> {
    return this.http.get<User>('http://localhost:8000/api/users/' + username)
  }

  insertUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8000/api/users/', user)
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/users/' + user.username,
      user
    )
  }

  deleteUser(username: string) {
    return this.http.delete('http://localhost:8000/api/users/' + username)
  }
}

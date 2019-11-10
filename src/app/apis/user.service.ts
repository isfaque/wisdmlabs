import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private GET_USERS: string;

  constructor(private http: HttpClient) {
      this.GET_USERS = 'employees';
  }

  getUsers(perPage, pageNo): Observable<any> { 
    const url = "https://randomuser.me/api/?results="+ perPage +"&page=" + pageNo
    return this.http.get<any>(url);
  }

}

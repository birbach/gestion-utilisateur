import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/envirenement/envirenement';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiLink = environment.apiLink;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiLink);
  }

  getUsersWithPagination(page: number, perPage: number): Observable<any[]> {
    return this.http.get<any[]>(this.apiLink + '?page=' + page + '&per_page=' + perPage);
  }
}

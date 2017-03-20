import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ApiService {

  private apiBaseUrl: String = 'http://58cbc27e88d2f01200229eb1.mockapi.io/api/v1/';

  constructor(
    private http: Http
  ) {}

  get (url) : Observable<any> {
    return this.http.get(`${this.apiBaseUrl}${url}`);
  }

  post (url, data) : Observable<any> {
    return this.http.post(`${this.apiBaseUrl}${url}`, data);
  }

  delete (url, id) : Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}${url}/${id}`);
  }

}

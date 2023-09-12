import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/env";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const url = this.baseUrl + 'users/login';
    const obj = {
      email: email,
      password: password
    }
    return this.http.post<any>(url, obj);
  }

  register(firstName: string, email: string, password: string, passwordConfirm: string): Observable<any> {
    const url = this.baseUrl + 'users/signup';
    const obj = {
      firstName: 'test',
      email: email,
      password: password,
      passwordConfirm: passwordConfirm
    }
    return this.http.post<any>(url, obj);
  }

  confirmEmail(token: any, email: string, password: string): Observable<any> {
    const url = this.baseUrl + `users/confirmEmail/${token}`;
    const obj = {
      email: email,
      password: password
    }
    return this.http.patch<any>(url, obj)
  }

  resetPass(email : any): Observable<any> {
    const url = this.baseUrl + `users/forgotPassword`;
    return this.http.post<any>(url, {email: email})
  }

  resetPassword(token: string, password: string, passwordConfirm: string): Observable<any> {
    const url = this.baseUrl + `users/resetPassword/${token}`;
    const obj = {
      password: password,
      passwordConfirm: passwordConfirm
    }
    return this.http.patch<any>(url, obj)
  }
 }

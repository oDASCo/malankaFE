import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {BASE_URL} from "../../shared/utils";

@Injectable()
export class AuthService {

  public userInfo$ = new BehaviorSubject(null);

  // //public baseUrl = 'http://localhost:3002/';
  //   // public baseUrl = '';
  constructor(
    public http: HttpClient
  ) {}


  public createUser(data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/users`, data);
  }

  public getUser(id: any): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/users/${id}`);
  }

  public getUserByUsername(username: any, queryParams: any): Observable<any> {
    console.log(queryParams);
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/users/${username}`, {params: queryParams});
  }

  public login(data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/auth/login`, data);
  }


  public googleAuth(): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/auth/google`);
  }


  // public getPoints(): Observable<any> {
  //   return this.http.get<HttpResponse<any>>(`${this.baseUrl}api/points`);
  // }
  //
  // public getCount(): Observable<any> {
  //   return this.http.get<HttpResponse<any>>(`${this.baseUrl}api/count`);
  // }
  //
  // public getPoint(key): Observable<any> {
  //   return this.http.get<HttpResponse<any>>(`${this.baseUrl}api/points/${key}`);
  // }
  //
  // public updatePoint(id, data): Observable<any> {
  //   return this.http.put<HttpResponse<any>>(`${this.baseUrl}api/points/${id}`, data);
  // }
  //
  // public addShift(data): Observable<any> {
  //   return this.http.put<HttpResponse<any>>(`${this.baseUrl}api/shifts`, data);
  // }
  //
  // public updateShiftTable(): Observable<any> {
  //   return this.http.get<HttpResponse<any>>(`${this.baseUrl}api/shifts/updateTable`);
  // }
  //
  // public updateUser(id, data): Observable<any> {
  //   return this.http.put<HttpResponse<any>>(`${this.baseUrl}api/users/${id}`, data);
  // }
  //
  // public deleteShift(id, params): Observable<any> {
  //   return this.http.delete<HttpResponse<any>>(`${this.baseUrl}api/shifts/${id}`, {params});
  // }

}

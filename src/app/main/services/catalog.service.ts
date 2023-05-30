import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICatalogItem, ICatalogItems, ICombo, IElement} from "../../shared/interfaces/interface";
import {BASE_URL} from "../../shared/utils";

@Injectable()
export class CatalogService {

  //public userInfo$ = new BehaviorSubject(null);
  public catalog$ = new BehaviorSubject([] as ICatalogItems);
  public addComboElement$ = new BehaviorSubject({} as ICatalogItem);
  public addClassElement$ = new BehaviorSubject({} as ICatalogItem);
  public videoSlide$ = new BehaviorSubject(false);

  //public baseUrl = 'http://localhost:3002/';
  // //public baseUrl = '';

  constructor(
    public http: HttpClient
  ) {
  }


  public createCatalogElement(data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/catalog`, data);
  }

  public editCatalogElement(data: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${BASE_URL}api/catalog`, data);
  }

  public uploadCatalogPhoto(data: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${BASE_URL}api/catalog/upload/photo`, data);
  }

  public uploadCatalogVideo(data: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${BASE_URL}api/catalog/upload/video`, data);
  }

  public getCatalogItems(queryParams?: any): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/catalog`, {params: queryParams});
  }

  public getMyElements(): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/element`);
  }

  public getCatalogItem(id: string): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/catalog/${id}`);
  }

  public addToMyElements(data: ICatalogItem): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/element`, data);
  }

  public addCombo(data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/combo`, data);
  }

  public getCombo(id: string): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/combo/${id}`);
  }

  public getMyCombos(): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/combo`);
  }

  public getWishlist(): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/wishlist`);
  }

  public addToWishlist(data: ICatalogItem): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/wishlist`, data);
  }

  public updateUser(id: string, data: any): Observable<any> {
    return this.http.put<HttpResponse<any>>(`${BASE_URL}api/users/${id}`, data);
  }

  public uploadUserPhoto(id: string, data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/user-photo/${id}`, data);
  }

  public getClasses(): Observable<any> {
    return this.http.get<HttpResponse<any>>(`${BASE_URL}api/classes`);
  }

  public addClass(data: any): Observable<any> {
    return this.http.post<HttpResponse<any>>(`${BASE_URL}api/classes`, data);
  }

}

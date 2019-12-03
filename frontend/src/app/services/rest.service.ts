import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { timeout, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const BASE_URL = 'http://localhost:8080/api';

/**
 * @author Caio Goulart Boni
 */
@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient, private router: Router) {}

  get(
    path: string,
    httpParams?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<any> {
    return this.http.get(BASE_URL + path, {
      params: httpParams,
      reportProgress: true
    });
  }

  post(
    path: string,
    body?: any,
    httpHeaders?:
      | HttpHeaders
      | {
          [param: string]: string | string[];
        },
    httpParams?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<any> {
    return this.http.post(BASE_URL + path, body, {
      headers: httpHeaders,
      params: httpParams,
      reportProgress: true
    });
  }

  put(
    path: string,
    body?: any,
    httpParams?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<any> {
    return this.http.put(BASE_URL + path, body, {
      params: httpParams,
      reportProgress: true
    });
  }

  delete(
    path: string,
    httpParams?:
      | HttpParams
      | {
          [param: string]: string | string[];
        }
  ): Observable<any> {
    return this.http.delete(BASE_URL + path, { params: httpParams });
  }
}

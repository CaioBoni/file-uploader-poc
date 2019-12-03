import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Injectable } from '@angular/core';

export const URL = '/api';

/**
 * @author Caio Goulart Boni
 */
@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {
  params = new HttpParams();
  headers = new HttpHeaders().set('Accept', 'multipart/form-data');

  constructor(private rest: RestService) {
  }

  sendMultiPartiObj(dto): Observable<any> {
    return this.rest.post('/filesForm', dto, this.headers);
  }

  sendObj(dto): Observable<any> {
    return this.rest.post('/files', dto);
  }

}

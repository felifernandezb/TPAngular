import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private url = 'https://api.restful-api.dev/objects'

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.url)
  }

  save(device: ServicioService): Observable<any> {
    return this.http.post(this.url, device)
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id)
  }

  /*update(device: ServicioService): Observable<any> {
    return this.http.put(this.url + '/')
  }*/
  
}

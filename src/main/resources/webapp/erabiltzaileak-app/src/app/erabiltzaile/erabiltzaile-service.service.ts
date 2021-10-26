import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErabiltzaileService {

  private url = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) {
  }

  getErabiltzaileak(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addErabiltzaile(erabiltzaile: Object): Observable<Object> {
    return this.http.post(`${this.url}`, erabiltzaile);
  }

  deleteErabiltzaile(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}

import { Injectable } from '@angular/core';
import { Logbock } from "../entitys/logbock";
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LogbockService {

  //private logbocksURL = 'http://localhost:8080/logbook/4';
  private logbocksURL = "api/logbocks";

  getLogbocks(): Observable<Logbock[]>{
    return this.http.get<Logbock[]>(this.logbocksURL)
  }

  getLogbock(id: number): Observable<Logbock> {
    const url = `${this.logbocksURL}/${id}`;
    return this.http.get<Logbock>(url);
    }

  constructor(private http: HttpClient) { }
}

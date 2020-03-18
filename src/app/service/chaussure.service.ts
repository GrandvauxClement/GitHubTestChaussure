import { Injectable } from '@angular/core';
import { Chaussure } from '../models/chaussure';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {
  chaussures: Chaussure[];
  apiURL = 'http://localhost:3000/chaussure';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };
  constructor(private http: HttpClient) {
    this.chaussures = [];
   }
   handleError(error) {
     let errorMessage = '';
     if ( error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
   }
   getChaussure(): Observable<Chaussure[]> {
     return this.http.get<Chaussure[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
   }
   getChaussureById(idChaussure): Observable<Chaussure> {
     return this.http.get<Chaussure>(this.apiURL + '/' + idChaussure)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
   }
   deleteChaussure(idChaussure: number): Observable<Chaussure> {
     return this.http.delete<Chaussure>(this.apiURL + '/' + idChaussure)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
   }
   addChaussure(chaussureToAdd: Chaussure): Observable<Chaussure> {
      return this.http.post<Chaussure>(this.apiURL, chaussureToAdd, this.httpOptions )
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
   }
   updateChaussure(chaussureToUpdate: Chaussure): Observable<Chaussure> {
     return this.http.put<Chaussure>(this.apiURL + '/' + chaussureToUpdate.id, chaussureToUpdate, this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     );
   }
}

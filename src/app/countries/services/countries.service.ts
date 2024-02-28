import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url:string='https://restcountries.com/v3.1'
  constructor(private httpClient: HttpClient) { }

  serachCapital(term:string):Observable<Country[]>{
    // const params:HttpParams = new HttpParams()
    // .set('capital', term)

    return this.httpClient.get<Country[]>(`${this.url}/capital/${term}`)
      .pipe(
        catchError(error=>{
          //console.log(error);
          //el of crea un objeto nuevo del observable con las caracteristicas deseadas
          return of ([]);
        })
        );
  }

  serachCountry(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/name/${term}`)
      .pipe(
        catchError(error=>{
          return of ([]);
        })
        );
  }

  serachRegion(term:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(`${this.url}/region/${term}`)
      .pipe(
        catchError(error=>{
          return of ([]);
        })
        );
  }

}

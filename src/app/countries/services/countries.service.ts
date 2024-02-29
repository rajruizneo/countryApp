import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private url:string='https://restcountries.com/v3.1'
  public cacheStore: CacheStore={
    byCapital:{value:'',countries:[]},
    byCountry:{value:'',countries:[]},
    byRegion:{value:'',countries:[]}
  }

  constructor(private httpClient: HttpClient) {
    this.loadToLocalStorage();
  }

  private getCountriesRequest(url:string):Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(()=> of([]) ),
      //delay(3000),
    );
  }

  serachCountryByAlphaCode(term:string):Observable<Country[] | null>{
    const url=`${this.url}/alpha/${term}`;

    return this.httpClient.get<Country[]>(url)
      .pipe(
        //map(countries => countries.length>0? countries[0]:null),
        catchError(()=> of (null))
      );
  }

  serachCapital(term:string):Observable<Country[]>{
    const url:string=`${this.url}/capital/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries=> this.cacheStore.byCapital={value:term, countries:countries}),
        tap(()=>this.saveToLocalStorage())
      )
    ;
  }

  serachCountry(term:string):Observable<Country[]>{
    const url:string=`${this.url}/name/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries=> this.cacheStore.byCountry={value:term, countries:countries}),
        tap(()=>this.saveToLocalStorage())
      )
    ;
  }

  serachRegion(term:string):Observable<Country[]>{
    const url:string=`${this.url}/region/${term}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries=> this.cacheStore.byRegion={value:term, countries:countries}),
        tap(()=>this.saveToLocalStorage())
      )
    ;
  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore',JSON.stringify(this.cacheStore));
  }

  private loadToLocalStorage(){
    if(!localStorage.getItem('cacheStore')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

}

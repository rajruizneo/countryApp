import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit{
  public countries:Country[]=[];
  public initialValue:string='';

  constructor(private countryService:CountriesService){
  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountry.countries;
    this.initialValue = this.countryService.cacheStore.byCountry.value;
  }

searchByCountry(term: string):void {
    this.countryService.serachCountry(term).subscribe(countries=>{this.countries=countries;});
 }

}

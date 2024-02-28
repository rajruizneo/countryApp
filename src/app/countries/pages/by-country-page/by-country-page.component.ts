import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {
  public countries:Country[]=[];

  constructor(private countryService:CountriesService){
  }

searchByCountry(term: string):void {
    this.countryService.serachCountry(term).subscribe(countries=>{this.countries=countries;});
 }

}

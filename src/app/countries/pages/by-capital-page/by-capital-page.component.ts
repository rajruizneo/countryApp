import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {
  public countries:Country[]=[];

  constructor(private countryService:CountriesService){
  }

searchByCapital(term: string):void {
    console.log({term});
    this.countryService.serachCapital(term).subscribe(countries=>{this.countries=countries;});
 }

}

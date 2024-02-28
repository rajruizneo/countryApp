import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {
  public countries:Country[]=[];

  constructor(private countryService:CountriesService){
  }

searchByRegion(term: string):void {
    this.countryService.serachRegion(term).subscribe(countries=>{this.countries=countries;});
 }

}

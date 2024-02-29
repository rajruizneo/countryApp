import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa'|'Americas'|'Asia'|'Europe'|'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent implements OnInit{
  public countries:Country[]=[];
  public initialValue:string='';
  public regions:Region[]=['Africa','Americas','Asia','Europe','Oceania'];

  constructor(private countryService:CountriesService){
  }
  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.initialValue = this.countryService.cacheStore.byRegion.value;
    //this.regions.
  }

searchByRegion(term: string):void {
    this.countryService.serachRegion(term).subscribe(countries=>{this.countries=countries;});
    this.initialValue = term;
 }

}

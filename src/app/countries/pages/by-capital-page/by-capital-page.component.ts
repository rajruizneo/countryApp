import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Country[]=[];
  public initialValue:string='';
  public isLoading:boolean=false;

  constructor(private countryService:CountriesService){
  }

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.value;
  }

searchByCapital(term: string):void {
    this.isLoading=true;
    console.log({term});
    console.log(this.isLoading);
    this.countryService.serachCapital(term).subscribe(countries=>{this.countries=countries; this.isLoading=false;});
 }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.css'
})
export class CountryPageComponent implements OnInit{

  public country?:Country;

  constructor(private activatedRoute:ActivatedRoute, private countryService:CountriesService
              ,private router:Router
            ){}



  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.countryService.serachCountryByAlphaCode(id))
    )
    .subscribe( (resp) => {
      console.log({resp});
      if (!resp) { return this.router.navigateByUrl(''); }
      console.log('Existe Pais');
      this.country = resp[0];
      return this.country;
    });
    }

    searchCountry(code:string){
      this.countryService.serachCountryByAlphaCode(code)
        .subscribe( country => {
          console.log({country})
        });
    }

  }

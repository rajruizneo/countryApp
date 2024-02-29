import { Country } from "./country";

export interface CacheStore{
  byCapital: CriteriaSearch;
  byCountry: CriteriaSearch;
  byRegion: CriteriaSearch;
}

export interface CriteriaSearch{
    value:string;
    countries:Country[];
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private _httpClient : HttpClient) { }


  // top headline url
  topHeadlineNews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
  //for technology
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
  //use techNews Method
  topTechNews():Observable<any>{
 return this._httpClient.get(this.techNews)
  }
  //for business
  businessNews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
  topbusinessNews():Observable<any>{
    return this._httpClient.get(this.businessNews);
  }
  //for entertainment
  //for entertainment
  entertainmentNews = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
   topentertainmentNews():Observable<any>{
    return this._httpClient.get(this.entertainmentNews);
   }

   //for health
   healthNews = 'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
   tophealthNews():Observable<any>{
     return this._httpClient.get(this.healthNews);
   }

   //for science
   scienceNews = 'https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
   topscienceNews():Observable<any>{
    return this._httpClient.get(this.scienceNews)
   }

   //for sports
   sportsNews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8fdc96d3bb1547c3b3b58aaf6d57704b'
   topSportsNews():Observable<any>{
    return this._httpClient.get(this.sportsNews)
   }
  topHeadlines(): Observable <any>{
   return this._httpClient.get(this.topHeadlineNews)
  }
}

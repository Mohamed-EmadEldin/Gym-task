import  {Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {news} from './news.model'

import {map} from "rxjs/operators"

@Injectable ({providedIn : 'root'})


export class NewsServices {

  constructor(private http: HttpClient) {}
  fetchNews() {
    return this.http
    .get ('http://3.65.32.166/api/v1/news?page=1&per_page=10')
    .pipe(
      map(responseData => {
          const NewsArray : news[] =[];

          for (const key in responseData) {
            if(responseData.hasOwnProperty(key)){
              NewsArray.push({ ...responseData[key], id:key })
          }
        }
        return NewsArray;
      })
      )
  }

}


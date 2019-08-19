import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseApiUrl = 'https://newsapi.org/v2/top-headlines';
  private newsApiUrl = '/?q=india&from=2019-07-16&sortBy=publishedAt&apiKey=17619f7c7321412d8ae7a6460ef14b63';
  constructor(
      private http: HttpClient
      ) {}
  getTodaysNews() {
          return this.http.get(this.baseApiUrl + this.newsApiUrl);
      }
}

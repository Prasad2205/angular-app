import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {NewsService} from '../news.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  allNews: any[];
  selectedNews: [];
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }
  getNews() {

    this.newsService.getTodaysNews().subscribe((res: any[]) => {
      console.log(res);

      this.allNews = res.articles;
    });
  }

}


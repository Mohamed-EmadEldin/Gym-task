import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NewsServices} from './news.service';
import { news } from './news.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  isFetching = false;
  NewsArray: news[] = [];

  constructor(private http : HttpClient, private newsServices : NewsServices )  { }

  ngOnInit(): void {

    this.newsServices. fetchNews();
  }



  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.newsServices. fetchNews(). subscribe (News => {
      this.isFetching =false;
       this.NewsArray =News;

    });
  }



}

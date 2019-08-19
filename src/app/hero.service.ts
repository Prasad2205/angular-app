import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apibaseUrl = 'https://jsonplaceholder.typicode.com';
  private fetchUsersApi = '/users';
  private heroes = [];
  constructor(
      private http: HttpClient,
      private messageService: MessageService
  ) {}

  getHeroes() {
    return this.http.get(this.apibaseUrl + '/users');
  }
}

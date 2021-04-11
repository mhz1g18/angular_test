import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


interface Item {
  id: Number,
  name: String,
  email: String,
  username: String,
  address: Object,
  phone: String,
  website: String,
  company: Object,
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.test.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test-app';

  items$: Item[];
  selectedItemName = ''

  constructor(private http: HttpClient){

  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://jsonplaceholder.typicode.com/users');
  }

  ngOnInit() {
     this.getItems().subscribe(res => {
      this.items$ = res;
    });
  }
}


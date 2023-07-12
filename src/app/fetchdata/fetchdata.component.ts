import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {
 
  httpData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data => {
      this.httpData = data;
      // console.log(this.httpData);
  });
}
}

// The url of api is passed to get() and then subscribed and
// stored the response to httpData 
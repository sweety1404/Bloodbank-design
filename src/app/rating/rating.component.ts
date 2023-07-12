import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  // standalone: true,
	// imports: [NgbRatingModule],
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  currentRate = 6;
  city="Jamshedpur Steel City";
  // today:"" | undefined;
  today=new Date();
  currencyValue=1000;

}



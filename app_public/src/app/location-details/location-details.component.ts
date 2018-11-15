import { Component, Input, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location, Review } from '../location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css'],
  providers: [Loc8rDataService]
})
export class LocationDetailsComponent implements OnInit {
  @Input() location: Location;
  
  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  };
  
  public formVisible: boolean = false;
  public formError: string = '';

  constructor(private loc8rDataService: Loc8rDataService) { }

  ngOnInit() {
  }
  
  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  private formIsValid(): boolean {
    if (this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit():void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log(this.newReview);
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
        .then((review: Review) => {
          console.log('Review saved', review);
          this.location.reviews.unshift(review);
          this.resetAndHideReviewForm();
        })
    } else {
      this.formError = 'All fields required, please try again';
    }
  }
}

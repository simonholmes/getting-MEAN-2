import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pageContent = {
    header : {
      title : 'Loc8r',
      strapline : 'Find places to work with wifi near you!'
    }
  };

}

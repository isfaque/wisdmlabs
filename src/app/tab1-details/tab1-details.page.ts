import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1-details',
  templateUrl: './tab1-details.page.html',
  styleUrls: ['./tab1-details.page.scss'],
})
export class Tab1DetailsPage implements OnInit {

  userData: any;

  constructor(private activatedRoute : ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe((res)=>{
      console.log(res);
      this.userData = res;
  });
  }

  ngOnInit() {
  }

}

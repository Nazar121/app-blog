import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current-category',
  templateUrl: './current-category.component.html',
  styleUrls: ['./current-category.component.scss']
})
export class CurrentCategoryComponent implements OnInit, OnDestroy {
  
  // listener query params
  sub: any;

  // Current category
  category: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // console.log(params);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // to current post
  currentPost() {
    console.log(this.router.url);
    this.router.navigate([`${this.router.url}/post`]);
  }

}

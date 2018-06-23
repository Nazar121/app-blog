import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ce-post',
  templateUrl: './ce-post.component.html',
  styleUrls: ['./ce-post.component.scss']
})
export class CEPostComponent implements OnInit {

  // @Input
  settings: any;
  
  constructor() { }

  ngOnInit() {
    this.settings = {
      create: true,
      post: {
        
      }
    };
  }

}

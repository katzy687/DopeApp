import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  links: any[] = [{ name: 'Post Listings (Admin)', path: 'post'},
                   {name: 'My Viewings', path: 'viewings'},
                   {name: 'Log In / Sign Up', path: 'login'}
                  ];

  constructor() { }

  ngOnInit() {

  }

}

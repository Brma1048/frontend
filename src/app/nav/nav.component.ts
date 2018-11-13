import { Component, OnInit } from '@angular/core';
import { faAddressBook, faSignInAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faAddressBook = faAddressBook;
  faSignInAlt = faSignInAlt;
  faMapMarkerAlt = faMapMarkerAlt;

  constructor() { }

  ngOnInit() {
  }

}

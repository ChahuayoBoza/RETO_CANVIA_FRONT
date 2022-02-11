import { Component, OnInit } from '@angular/core';
import { faHome, faUserTie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHome = faHome;
  faUserTie = faUserTie;

  constructor() { }

  ngOnInit(): void {
  }

}

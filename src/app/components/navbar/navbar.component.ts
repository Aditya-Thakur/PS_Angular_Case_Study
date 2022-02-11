import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private router: Router) { }
  active: string = '';


  ngOnInit(): void {
    this.active = window.location.pathname.split('/')[1];
    
  }
  

  goTo(path: string) {
    this.active = path;
    this.router.navigate([path]);
  }

}
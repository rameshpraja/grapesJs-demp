import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() componentName = '';
  constructor(private router:Router) {}

  ngOnInit(): void {}

  onLogout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/auth/login");
  }
}

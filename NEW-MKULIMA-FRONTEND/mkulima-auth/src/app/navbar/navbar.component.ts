import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  authenticated = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    AuthService.authEmitter.subscribe(authenticated => {
      this.authenticated = authenticated;
    })
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.authService.accessToken = '';
      AuthService.authEmitter.emit(false);
    });
  }

}

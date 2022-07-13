import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
          {
            next: (res:any) => {
              this.message = `Welcome ${res.first_name} ${res.last_name}`;
              AuthService.authEmitter.emit(true);
            },
            error: err => {
              this.message = "You are not loggedin";
              AuthService.authEmitter.emit(false);
              
            }
          }
        );
    this.form = this.formBuilder.group({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
    })
  }

  registerUser() {
    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/login'])
  });
  }

}

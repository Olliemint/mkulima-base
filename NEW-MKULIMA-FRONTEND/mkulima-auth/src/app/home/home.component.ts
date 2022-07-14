import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CatalogueFeedService } from 'src/app/services/catalogue-feed.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message: any =[];
  form!: FormGroup;
  currentuser: any = [];
  angForm: FormGroup;


  constructor(private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private postservice:CatalogueFeedService
  ) { 
    this.angForm = fb.group({
      name:['',Validators.required],
      description:['',Validators.required],
      image:[''],
      author:[''],

    })
    

  }

  ngOnInit(): void {
    this.authService.user().subscribe(
          {
            next: (res:any) => {
              this.message = `Welcome ${res.first_name} ${res.last_name} ${res.id}`;
              AuthService.authEmitter.emit(true);
              console.log(this.message);
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
    this.getcurrent()
  }

  registerUser() {
    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/login'])
  });
  }

  AddProduct(data:any) {
    this.postservice.postCatalogue(this.angForm.value).subscribe((data) => {
      
      this.router.navigate(['catalogue']);
    })

  }

  getcurrent(){
    this.authService.user().subscribe((data:any) => {
      this.currentuser = data;
      console.log(this.currentuser);

    })
  }

}

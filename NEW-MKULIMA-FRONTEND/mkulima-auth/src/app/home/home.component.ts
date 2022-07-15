import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { CatalogueFeedService } from 'src/app/services/catalogue-feed.service';
import { HttpResponse } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any= [];
  
  message: any =[];
  form!: FormGroup;
  currentuser: any = [];
  angForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    author: new FormControl('',[]),
    image: new FormControl('',[]),

  })


  feedForm: FormGroup = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    category: new FormControl('',[Validators.required]),
    
    image: new FormControl('',[]),

    author: new FormControl('',[]),

  })


  // onImageChanged(event: any) {

  // }


  constructor(private fb: FormBuilder,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private postservice:CatalogueFeedService
  ) { 
   
    

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

    this.postservice.getCategorys().subscribe((data)=>{
      this.categories = data;
      console.log(this.categories);
    });
    
  }

  registerUser() {
    this.authService.register(this.form.getRawValue()).subscribe({
      next: () => this.router.navigate(['/login'])
  });
  }

  onFileSelect(event: any){
    const file = event.target.files[0];
    this.angForm?.get('image')?.setValue(file)

    console.log(event);
  }

  onFileImage(event: any){
    const fileimage = event.target.files[0];
    this.feedForm?.get('image')?.setValue(fileimage)

    console.log(event);
  }

  AddProduct(data:any) {

    console.log(this.angForm.value)
    if (this.angForm.invalid){


      return console.log("form is invalid");
    }
    this.postservice.postCatalogue(this.angForm.value).subscribe((ev) => {
      console.log(ev);
      
      this.router.navigate(['catalogue']);
    })

  }

  AddFeed(data:any) {

    console.log(this.feedForm.value)
    if (this.feedForm.invalid){


      return console.log("form is invalid");
    }
    this.postservice.postFeed(this.feedForm.value).subscribe((ev) => {
      console.log(ev);
      
      this.router.navigate(['feeds']);
    })

  }


  getcurrent(){
    this.authService.user().subscribe((data:any) => {
      this.currentuser = data;

      console.log(this.currentuser);

    })
  }

}

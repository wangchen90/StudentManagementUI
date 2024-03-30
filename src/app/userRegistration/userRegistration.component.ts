import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-userRegistration',
  templateUrl: './userRegistration.component.html',
  styleUrls: ['./userRegistration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  loginForm!: FormGroup;
  registerForm!: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiService,
    private http: HttpClient, private toast: HotToastService, private router: Router) {
  }

  showtoast() {
    this.toast.show('Hello World!');
  }

  ngOnInit() {
    // Initialize form controls with validators
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        confirmpassword: ['', [Validators.required]]
      }, { validator: this.passwordConfirming }),
    })
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password')?.value !== c.get('confirmpassword')?.value) {
      return { invalid: true };
    }
    return { invalid: false }
  }

  // onregister(){
  //   console.log(this.registerForm)
  // }
  onregister() {
    console.log(this.registerForm);
    if (this.registerForm.value.password == this.registerForm.value.confirmpassword) {

      let postObj = {
        "username": this.registerForm.value.username,
        "password": this.registerForm.value.passwords.password
      }
      console.log(postObj);

      this.apiService.InitiatePostRequest("User/UserRegistration", postObj).subscribe((res: any) => {
        console.log(res)
        if (res.result == true) {
          this.toast.success("User Registered Successfull")
          setTimeout(() => {
            this.router.navigate(['/login'])
          }, 1500);

        }
        else {
          this.router.navigate(['/login'])
          this.toast.error("User Registered Unuccessfull");
        }

      }, (error) => {
        this.toast.error("User Registered Unsuccessfull")

      });
    }
  }

}
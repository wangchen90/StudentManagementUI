import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { HttpClient } from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  loginFormGroup!: FormGroup;
  isText: boolean = false;
  eyeIcon: string = 'fa-eye';
  input_type!: string;

  constructor(private fb: FormBuilder, private apiService: ApiService, private http: HttpClient, private toast : HotToastService) {
  }

  ngOnInit() {
    // Initialize form controls with validators
     this.loginForm();
  }

  loginForm(){
    this.loginFormGroup = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  hideShow_passwordIcon(){
    console.log(this.isText);
    
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.input_type = "text" : this.input_type = "password";
  }


  onLogin() {
    console.log(this.loginForm);
    this.apiService.InitiatePostRequest("User/LoginUser", this.loginFormGroup.value).subscribe((res:any) => {
        console.log(res)
        if(res.result == true){
        this.toast.success("User Login Successfull")
        }
        else{
          this.toast.error("User Login Unsuccessfull")
        }
      },(error)=>{
        this.toast.error("User Login Unsuccessfull")
      });
  }

}

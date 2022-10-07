import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggin: boolean = true;
  logData: any;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // console.log("LOGIN FORM VALUE IS:", this.loginForm.value)
    // this.auth.getData().pipe(
    //   (x:any):any=>{console.log(x)}
    // ).subscribe((res)=>{
    //   console.log(res)
    // })

    this.auth.getData().subscribe((res) => {
      this.logData = res;
      console.log('YIPEEEE', this.logData);

      this.logData.map((result: any) => {
        if (
          this.loginForm.value.email == result.email &&
          this.loginForm.value.password == result.password
        ) {
          this.isLoggin = true;
          // alert("Login Success")
        }
        // else alert("Login Failed")
      });
    });

    // if(this.isLoggin){
    //   alert("Login Success")
    // }
    // else alert("Login Failed")
    // console.log(this.isLoggin);
    alert ("login success")
    this.router.navigate(['/admin'])
  }
}

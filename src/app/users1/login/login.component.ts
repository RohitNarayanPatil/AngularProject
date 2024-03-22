import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';

import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user1="login"
  loginform=new FormGroup({
    user: new FormControl('',[Validators.required,]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  loginUser(){  
    console.warn(this.loginform.value);
    this.route.navigate(['dashboard'])
  }
  get user(){
return this.loginform.get('user')
  }
  get password(){
return this.loginform.get('password')
  }

  constructor(public route:Router){
    {
      
    }
    
  }
// onlogin(){
  
// }
// // submit(){
// // console.log(this.user)

// }

signupuser:any[]=[];
signupobj:any ={
username:'',
email:'',
password:'',
rpPassword:'',

}

loginobj:any ={
username:'',
password:'',


}
onSignUp(){

this.signupuser.push(this.signupobj)
localStorage.setItem('signupuser',JSON.stringify(this.signupuser));
this.signupobj ={
  username:'',
  email:'',
  password:'',
  rpPassword:'',
  
  }
}

ngOnInit():void{
const localdata=localStorage.getItem('signupuser');
if(localdata !=null){
  this.signupuser=JSON.parse(localdata);
}
}
onlogin(){
  // debugger
const isUserExist= this.signupuser.find(m=>m.username==this.loginobj.username && m.password ==this.loginobj.password);
if(isUserExist !=undefined){
  
  this.route.navigate(['dashboard/header/maindata'])
  alert('user logged in sucessfully')
}else{
  alert('Wrong Credential')
}
}

}
  
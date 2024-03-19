import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators, compare } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

// title=true;
// title1=true;
// cond=false;
// rpCond=false;
// showpwd(){
//   this.cond=!this.cond;
//    this.title=!this.title;
// }
// rpShowpwd(){
//   this.rpCond=!this.rpCond;
//   this.title1=!this.title1;

registerForm = new FormGroup({
  name: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.minLength(8)]),    
  // rpPassword: new FormControl('',[Validators.required,Validators.minLength(8)]),
  rpPassword: new FormControl('',RxwebValidators.compare({fieldName:'password'})),
  checkbox: new FormControl('',Validators.required),

  
});


// confirmPasswordValidator(control: FormControl): { [key: string]: any } | null {
//   if (control.parent) {
//     const password = control.parent.get('password')?.value;
//     const rpPassword = control.value;
//     if (password !== rpPassword) {
//       return { 'passwordsDontMatch': t rue };
//     }
//   }
//   return null;
// }

regSubmit(){
  console.warn(this.registerForm.value);
  this.route.navigate(['login'])
}


get name(){
  return this.registerForm.get('name');
}

get email(){
  return this.registerForm.get('email');
}

get password(){
  return this.registerForm.get('password');
}

get rpPassword(){
  return this.registerForm.get('rpPassword');
}


cond=false;
Icon=true;

rpCond=false;
rpIcon=true;
showpwd(){
  this.cond=!this.cond;
  this.Icon=!this.Icon;
}

rpShowpwd(){
  this.rpCond=!this.rpCond;
  this.rpIcon=!this.rpIcon;
}
constructor(public route:Router){
  {
    
  }
}
// submit(){
// // console.log(this.user)
// this.route.navigate(['login'])
//   // this.registerForm.get('password')==this.registerForm.get('rpPassword')?this.dashroute.navigate(['/dashboard']):console.log("Enter Same Password");
//   // this.registerForm.value.password===this.registerForm.value.rpPassword?this.route.navigate(['/login']):alert("Enter Same Password");

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
  alert('user has been created')
  this.route.navigate(['login'])

 
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
  this.route.navigate(['dashboard'])
  // alert('user logged in suuesfully')
}else{
  alert('wrong cred')
}
}
}


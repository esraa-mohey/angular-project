import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  email: string ='';
  userMsg : string ='';

  constructor(private _AuthService:AuthService , private _Router:Router){}
 step1:boolean= true
 step2:boolean= false
 step3:boolean= false


forgetForm:FormGroup = new FormGroup({
  email:new FormControl('')
})

resetCoode:FormGroup = new FormGroup({
  resetco:new FormControl('')
})

resetPass:FormGroup = new FormGroup({
  //email:this.forgetForm.get{'email'}?.value
  newpass:new FormControl('')
})

forgotPassword():void{
  let userEmail = this.forgetForm.value;
  this.email = userEmail.email;
  this._AuthService.forgetPass(userEmail).subscribe({
    next: (response)=>{
      console.log(response);
      this.userMsg = response.message;
      this.step1 = false;
      this.step2 = true;
    },
    error:(err)=> {
      this.userMsg = err.error.message;
  },
  })
}

resetCode():void{
  let userCoode = this.resetCoode.value;

  this._AuthService.verifyResetCode(userCoode).subscribe({
    next: (response)=>{
      console.log(response);
      this.userMsg = response.status;
      this.step2 = false;
      this.step3 = true;
    },
    error:(err)=> {
      this.userMsg = err.error.message;
  },
  })
}
resetPassword():void{
  let resetPassw = this.resetPass.value;
  resetPassw.email = this.email;
  this._AuthService.updatePassWord(resetPassw).subscribe({
    next: (response)=>{
      if(response.token){
        localStorage.setItem('etoken',response.token)
      }
      this._Router.navigate(['/home'])
    },
    error:(err)=> {
      this.userMsg = err.error.message;
  },
  })
}

}


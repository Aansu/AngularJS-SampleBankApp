import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // aim="Welcome";
  //acNumber="Account number please"; [value]="acNumber"
  acno="Account number please";
  pswd="";

users:any={
  1000:{acno:1000,username:"Aan",password:"one",balance:5000},
  1001:{acno:1001,username:"Aansu",password:"onee",balance:50000},
  1002:{acno:1002,username:"Aany",password:"onee",balance:9000},
  1003:{acno:1003,username:"Anoop",password:"onee",balance:7000},
  1004:{acno:1004,username:"Appu",password:"onee",balance:2000}
}
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //binding property--(change)="accNumber($event)",(change)="pswdChange($event)"
  // accNumber(event:any){
  //   this.acno=event.target.value
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  // }



  // login(){  //one way binding
  //   var acno=this.acno;
  //   var pswd=this.pswd;

  //   let ac_details=this.users;
  //   if(acno in ac_details){
  //     if (pswd==ac_details[acno]["password"]){
  //       alert("login success");
  //     }else{
  //       alert("incorrect password");
  //     }
  //   }else{
  //     alert("no account found");
  //   }
  // }

  login(){
    var acno=this.acno;
    var pswd=this.pswd;

    let ac_details=this.users;
    if(acno in ac_details){
      if (pswd==ac_details[acno]["password"]){
        alert("login success");
        this.router.navigateByUrl("dashboard")
      }else{
        alert("incorrect password");
      }
    }else{
      alert("no account found");
    }
  }

}

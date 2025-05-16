import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AdminserviceService } from '../../../services/adminservice.service';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private adminservice: AdminserviceService
  ){

  }
  login=new FormGroup({
    username:new FormControl(''),
    password : new FormControl('')
  })

  log(){
    console.log(this.login.value);
    this.adminservice.login(this.login.value)
    .subscribe(res=>{
      alert("login Success")
    },err=>{
      console.error("login Failed");   
    })
  }

  
}

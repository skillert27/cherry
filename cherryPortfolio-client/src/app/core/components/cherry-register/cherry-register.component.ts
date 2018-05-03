import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { routerSlideAnimation } from '../../animations/index';


@Component({
  selector: 'app-cherry-register',
  templateUrl: './cherry-register.component.html',
  styleUrls: ['./cherry-register.component.css'],
  animations: [routerSlideAnimation],
  host : {'[@routerSlideAnimation]':''}
})
export class CherryRegisterComponent implements OnInit {
  formModel : FormGroup;

  // constructor() {
  //   this.formModel = new FormGroup({
  //     'userName' : new FormControl(),
  //     'email' : new FormControl(),
  //     'pwdGroup' : new FormGroup({
  //       'pwd' : new FormControl(),
  //       'pwdchk' : new FormControl()
  //     })
  //   });
  // }

  constructor(
    private fb : FormBuilder,
    private location : Location,
    private router : Router
  ){
    this.formModel = fb.group({
      'userName' : ['',Validators.required],
      'email' : [''],
      'pwdGroup' : fb.group({
        'pwd' : ['',Validators.minLength(8)],
        'pwdchk' : ['']
      })
    })
  }

  onSubmit(){
    //console.log(this.formModel.pwdGroup.pwd.valid);
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.router.navigate(['home']);
    }
  }
  goback(){
    this.location.back();
  }

  ngOnInit() {
  }

}

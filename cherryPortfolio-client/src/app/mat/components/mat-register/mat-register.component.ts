import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { routerSlideAnimation } from '../../animations/index';

@Component({
  selector: 'app-mat-register',
  templateUrl: './mat-register.component.html',
  styleUrls: ['./mat-register.component.css'],
  //animations: [routerSlideAnimation],
  //host : {'[@routerSlideAnimation]':''}
})
export class MatRegisterComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

constructor(private _formBuilder: FormBuilder) { }

ngOnInit() {
   this.firstFormGroup = this._formBuilder.group({
     firstCtrl: ['', Validators.required]
   });
   this.secondFormGroup = this._formBuilder.group({
     secondCtrl: ['', Validators.required]
   });
 }
}

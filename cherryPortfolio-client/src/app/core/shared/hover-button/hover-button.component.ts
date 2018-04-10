import { Component, OnInit,Input } from '@angular/core';
import { btnMouseToggleAnimation } from '../../animations/index';

@Component({
  selector: 'hover-button-component',
  templateUrl: './hover-button.component.html',
  styleUrls: ['./hover-button.component.css'],
  animations:[
    btnMouseToggleAnimation
  ]
})
export class HoverButtonComponent implements OnInit {
  @Input()
  title : string;
  state : string = 'mouseLeave';

  mouseToggle(){
    this.state = (this.state === 'mouseLeave' ? 'mouseEnter' : 'mouseLeave');
  }
  constructor() { }

  ngOnInit() {
  }

}

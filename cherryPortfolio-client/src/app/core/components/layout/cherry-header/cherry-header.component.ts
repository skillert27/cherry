import { Component, OnInit} from '@angular/core';
import { imgSliderAnimation } from '../../../animations/index';

@Component({
  selector: 'cherry-header',
  templateUrl: './cherry-header.component.html',
  styleUrls: ['./cherry-header.component.css'],
  animations:[
    imgSliderAnimation
  ]
})
export class CherryHeaderComponent implements OnInit {
  state : string = 'right';

  constructor() { }

  ngOnInit() {
    setTimeout(()=>this.state = 'left',0);
    setInterval(()=>this.state = (this.state === 'right' ? 'left':'right') ,5000);
  }


}

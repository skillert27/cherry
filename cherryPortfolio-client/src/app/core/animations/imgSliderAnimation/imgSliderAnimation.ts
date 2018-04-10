import { trigger,state,style,animate,transition } from '@angular/animations';

export const imgSliderAnimation = trigger('imgSliderAnimation',[
  state('right',style({
  })),
  state('left',style({
    transform : 'translateX(-500px)'
  })),
  transition('right <=> left',animate('5s ease-in-out'))
]);

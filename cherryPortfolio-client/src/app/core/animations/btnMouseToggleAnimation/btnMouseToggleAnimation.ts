import { trigger,state,style,animate,transition } from '@angular/animations';

export const btnMouseToggleAnimation = trigger('btnMouseToggleAnimation',[
  state('mouseLeave',style({})),
  state('mouseEnter',style({
    transform : 'scale(1) translateX(.2rem) translateY(.2rem)'
  })),
  transition('mouseLeave <=> mouseEnter',animate('0.5s ease-in-out'))
]);

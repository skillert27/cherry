import { trigger,state,animate,transition,style} from '@angular/animations';

export const routerSlideAnimation = trigger('routerSlideAnimation',[
    state('*',style({
      position : 'absolute',
       top :0,
       left :0,
       right :0,
       bottom :0,
      backgroundColor : 'rgba(0,0,0,0.7)'
    })),
    transition(':enter',[
      style({
        opacity : 0,
        backgroundColor : 'rgba(0,0,0,0)'
      }),
      animate('1s ease-in-out',style({
        opacity : 1,
        backgroundColor : 'rgba(0,0,0,0.7)'
      }))
    ])
]);

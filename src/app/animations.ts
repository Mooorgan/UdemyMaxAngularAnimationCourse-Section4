import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
  state(
    'default',
    style({
      backgroundColor: 'orange',
      width: '100px',
      height: '100px',
    })
  ),
  state(
    'clicked',
    style({
      backgroundColor: 'blue',
      width: '300px',
      height: '50px',
    })
  ),
  state(
    'mouseDown',
    style({
      backgroundColor: 'red',
      border: '1px solid black',
      width: '100px',
      height: '100px',
    })
  ),

  transition('default=>clicked', animate('1000ms 500ms ease-in')),
  transition('clicked=>default', animate(300)),
  transition('mouseDown<=>clicked', animate(300)),
  // transition('clicked=>mouseDown', animate(300)),
]);

export const numberEnteredStateTrigger = trigger('numberEnteredState', [
  state(
    'unselected',
    style({
      border: '1px solid black',
      padding: '5px',
    })
  ),
  state(
    'selected',
    style({
      border: '2px solid blue',
      padding: '4px',
      backgroundColor: 'lightblue',
    })
  ),
  transition('unselected=>selected', [
    style({
      border: '2px solid black',
      // border: '2px solid green',
      padding: '4px',
      backgroundColor: 'green',
      // backgroundColor: 'transparent',
      transform: 'scale(1)',
    }),
    animate(
      '300ms 100ms ease-out',
      style({
        backgroundColor: 'red',
        // border: '1px solid #ccc',
        // padding: '2px',
        transform: 'scale(1.15)',
      })
    ),
    // style({
    //   backgroundColor: 'red',
    //   border: '1px solid #ccc',
    //   padding: '2px',
    // }),
    animate(300),
  ]),
]);

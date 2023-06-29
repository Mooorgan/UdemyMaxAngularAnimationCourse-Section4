import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [clickedStateTrigger, numberEnteredStateTrigger],
})
export class AppComponent {
  numberEntered!: number;
  clickInfo = 'default';
  paragraphClick = 'default';
  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

  input(event: Event) {
    this.numberEntered = +(event.target as HTMLInputElement).value;
  }
}

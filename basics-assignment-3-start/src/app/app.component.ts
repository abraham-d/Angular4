import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMessage = false;
  // counter = 0;
  messages = [];

  onBtnClick() {
    this.showMessage = !this.showMessage;
    // this.counter = ++this.counter;
    // this.messages.push(this.counter);
    // this.messages.push(this.messages.length + 1);
    this.messages.push(new Date());
  }
}

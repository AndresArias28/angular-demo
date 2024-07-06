import { Component } from '@angular/core';
// import { products } from './products'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myApp1';
  fontColor = 'red';
  sayHelloId = 1;
  canClick = true;
  message = "I'm read only!";
  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }



  sayMessage() {
    alert(this.message);
  }
}

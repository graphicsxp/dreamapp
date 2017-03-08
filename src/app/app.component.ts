import { Component } from '@angular/core';

@Component({
  selector: 'ma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  handleClick(){
    this.title =' new title';
  }

  handleTime(time: number) {
    console.log(time);
  }
}

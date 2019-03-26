import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Workshop de Angular 2+';
  pageSelected: number = 1;


  changePage(e): void {
    this.pageSelected = e;
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @Output('onSelected') onSelected: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleSelected(e: Event, index: number): void {
    e.preventDefault();
    this.onSelected.emit(index);
  }

}

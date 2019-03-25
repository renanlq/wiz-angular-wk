import { Component, OnInit } from '@angular/core';
import { Joke, JOKES_LIST } from './jokes-list';

@Component({
  selector: 'joke-widget',
  templateUrl: './joke-widget.component.html',
  styleUrls: ['./joke-widget.component.scss']
})
export class JokeWidgetComponent implements OnInit {

  joke: Joke;
  jokesList: Joke[] = JOKES_LIST;
  constructor() { }

  ngOnInit() {
    let index: number = Math.round(Math.random() * (this.jokesList.length -1));
    this.joke = this.jokesList[index];
  }

}

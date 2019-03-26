import { Component, OnInit } from '@angular/core';
import { JokesService, JokeModel } from '../jokes.service';

@Component({
  selector: 'joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes: JokeModel[] = [];

  constructor(private jkServices: JokesService) { }

  ngOnInit() {
    this.jkServices.list()
      .subscribe(data => {
        this.jokes = data;
        console.log(this.jokes)
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'joke-new',
  templateUrl: './joke-new.component.html',
  styleUrls: ['./joke-new.component.scss']
})
export class JokeNewComponent implements OnInit {

  formJoke: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
  })
  constructor() { }

  ngOnInit() {
  }

}

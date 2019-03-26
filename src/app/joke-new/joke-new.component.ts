import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JokesService } from '../jokes.service';

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
  constructor(private jkService: JokesService) { }

  ngOnInit() {
  }

  sendform() {
    if (this.formJoke.valid) {
      this.jkService.create(this.formJoke.value)
        .subscribe(
          data => {
            window.alert("piada inserida com sucesso!");
            this.formJoke.reset();
          }, error => {
            window.alert("Erro ao salvar piada");
          }
        )
    } else {
      window.alert("preencha os campos corretamnte");
    }
  }

}

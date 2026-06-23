import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  @Input()pensamento = {
    conteudo: 'I love angular',
    autoria: 'Jefferson',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length > 250){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Pensamento} from "../pensamento";

@Component({
  selector: 'app-pensamentos',
  templateUrl: './pensamentos.component.html',
  styleUrls: ['./pensamentos.component.css']
})
export class PensamentosComponent implements OnInit {

  @Input()pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
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

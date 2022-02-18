import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value1: number | undefined;
  value2: number | undefined;
  result: number | undefined;
  conta: any;

  execute(operacao: any){

    switch(operacao){
      case 'soma':
        this.sum()
      break

      case 'div':
        this.div()
      break

      case 'mult':
        this.mult()
      break

      case 'sub':
        this.sub()
      break
    }
      }

      sum() {
        this.result = Number(this.value1) + Number(this.value2);
      }

      sub() {
        this.result = Number(this.value1) - Number(this.value2);
      }

      mult() {
        this.result = Number(this.value1) * Number(this.value2);
      }

      div() {
        if (Number(this.value2) != 0) {
          this.result = Number(this.value1) / Number(this.value2);
        }
        else{
          alert('Não é possivel efetuar divisão por 0');
        }
      }



}

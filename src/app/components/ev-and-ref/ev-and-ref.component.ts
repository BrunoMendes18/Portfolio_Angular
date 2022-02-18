import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ev-and-ref',
  templateUrl: './ev-and-ref.component.html',
  styleUrls: ['./ev-and-ref.component.css']
})
export class EvAndRefComponent implements OnInit {

  @ViewChild ('refExp') referencia:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  cor:string="black";

  changeColor(corR:string)
  {
    this.cor=corR;
  }

  buttonColor(){
    this.referencia!.nativeElement.style.background="red";
  }

  buttonHeight()
  {
    this.referencia!.nativeElement.style.padding="15px";
  }

  buttonWidth()
  {
    this.referencia!.nativeElement.style.width="35px";
  }

}

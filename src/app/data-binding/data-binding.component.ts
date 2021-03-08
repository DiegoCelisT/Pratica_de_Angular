import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  
  //variáves para interpolar:
  url: string ="https://youtube.com";
  catorze: number = 14;

  //Também pode funções:
  UNO (): number {
    return 1;
  }

  //Variáveis para fazer property binding:
  urlImagem: string = "https://picsum.photos/400";
  ValorTexto: string = "Diego";
  SouUmPlaceholder: string = "Por que vc apagou meu nome?";
  Largura: number = 200;


  constructor() { }

  ngOnInit(): void {
  }

}

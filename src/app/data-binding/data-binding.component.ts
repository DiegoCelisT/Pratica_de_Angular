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

  //Função para o event binding:
  botaoClicado () {
    alert ("AI!, clica muito forte não!!!");
  }

  //Funções para events bindings de meu campo de texto:
  campo_texto: string = 'aguardando...';
  onKeyUp (valor: any){ //É necessario declarar o tipo da função!!!!!
    this.campo_texto = valor;
  }

  valor_salvo: string = '';
  salvarValor (evento_valor: any){
    this.valor_salvo = evento_valor;
  }

  //Evento blur
  // texto_ao_sair: string = "";
  sairDoCampo (){
    console.log ("saiu vagabundo, volta lá");
  }

  //Evento mouseover
  passeiMouse (){
    console.log ("Opa!! estou sentindo isso!")
  }

  //Evento change dentro de un select:
  nome_selecionado: string= "";
  valorSelecionado (valor_nome: any){
    this.nome_selecionado = valor_nome;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

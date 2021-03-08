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



  constructor() { }

  ngOnInit(): void {
  }

}

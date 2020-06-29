import { Component, OnInit } from '@angular/core';
import { Empresa } from './lista';
import { EMPRESAS } from './lista_empresa';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  empresas = EMPRESAS;
  selectedEmpresa: Empresa;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(empresa: Empresa): void {
     this.selectedEmpresa = empresa;
  }

}

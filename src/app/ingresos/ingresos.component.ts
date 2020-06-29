import { Component, OnInit } from '@angular/core';
import { factura_venta } from './ingresos';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingreso_venta: factura_venta = {
    id_empresa: 1069725107,
    nombre_cliente: 'Diego Sierra',
    producto_vendido: 'Acer Tablet',
    valor_venta: 700000,
  };

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import {CartasService} from '../cartas.service';
import {ConfigService} from '../config.service';


declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css']
})
export class CartasComponent implements OnInit {
  listacartas: Array<any> ;
  filtro: string;
  clasesF: any;
  setF: any;
  typeF: any;
  rarityF: any;
  control: any;
  ruta: any;
  constructor(private cartasService: CartasService, public config: ConfigService) {
    this.filtro = '';
    this.ruta = true;
    this.control = true;
  }
  ngOnInit() {
    this.cargar();
  }
  limpiar(){
    this.setF = undefined;
    this.clasesF = undefined;
    this.typeF = undefined;
    this.rarityF = undefined;

  }
  cargar() {
    this.ruta = true;
    this.cartasService.refresh().subscribe(datos => { this.listacartas = datos});
    this.cartasService.loadData();
    $(window).scroll(() =>{
      if (this.ruta) {
        if (this.control) {
          if ($(document).height() - $(window).height() <= ($(window).scrollTop() + 80)) {
            this.control = false;
            this.listacartas = this.listacartas.concat(this.cartasService.masCartas());
            this.control = true;
          }}}});
  }
  ngOnDestroy(){
    this.ruta = false;
  }
}

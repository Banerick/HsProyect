import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartasService} from '../cartas.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  cartaIden: any;
  carta: any;
  constructor(private cartaId: ActivatedRoute, private cartasService: CartasService) {
  }
  ngOnInit() {
    this.cartaId.params.subscribe(parameter => {
      this.cartaIden = parameter['cartaId'];
    });
    for (let c of this.cartasService.listaCartas){
      if ( this.cartaIden == c.dbfId)
        this.showDetails(c);
    }
  }
  showDetails(c){
    this.carta = c;
  }
}

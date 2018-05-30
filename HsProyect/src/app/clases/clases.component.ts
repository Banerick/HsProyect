import {Component, OnInit} from '@angular/core';
import {InfoClaseService } from '../info-clase.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  clases: any;
  constructor(private infoclases: InfoClaseService) {
    this.clases = infoclases.clases;
  }
  ngOnInit() {

  }
}

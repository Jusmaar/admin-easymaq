import { Component, OnInit } from '@angular/core';
import { MapaService } from '../../services/mapa.service';
import { Marcador } from '../../interfaces/marcador.interface';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  lat:number=-12.087119;
  lng:number=-76.994705;
  zoom:number=15;

  constructor(public _ms:MapaService) {

   }

  ngOnInit() {
    console.log(this._ms);
  }
  
  clickMapa(evento){
    let newMarcador:Marcador={
      lat:evento.coords.lat,
      lng:evento.coords.lng,
      draggable:true
    }
    this._ms.insertarMarcador(newMarcador);
    console.log(evento);
  }
}

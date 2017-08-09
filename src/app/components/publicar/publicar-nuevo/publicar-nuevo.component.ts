import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-publicar-nuevo',
  templateUrl: './publicar-nuevo.component.html',
  styleUrls: ['./publicar-nuevo.component.scss']
})
export class PublicarNuevoComponent implements OnInit {
  direcci: any;
  lat: any;
  lon: any;
  tipos:string[]=["venta","alquiler"];
  constructor() { }

  ngOnInit() {
  }
  
  showBtnDireccion(event){
        this.direcci = event.nameBtndireccion;
        this.lat = event.nameLatitud;
        this.lon = event.nameLongitud;
        localStorage.setItem("direccion", this.direcci);
        localStorage.setItem("latitud", this.lat);
        localStorage.setItem("longitud", this.lon);
    }
}

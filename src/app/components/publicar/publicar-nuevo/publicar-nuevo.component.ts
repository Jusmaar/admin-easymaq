import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileItem } from "../../../models/file-item";
@Component({
  selector: 'app-publicar-nuevo',
  templateUrl: './publicar-nuevo.component.html',
  styleUrls: ['./publicar-nuevo.component.scss']
})
export class PublicarNuevoComponent implements OnInit {
  direcci: any;
  lat: any;
  lon: any;
  archivos: FileItem[] = [];
  tipos: string[] = ["venta", "alquiler"];
  constructor() { }

  ngOnInit() {
  }
  deleteimage(i:number){
        this.archivos.splice(i,1);
        console.log(this.archivos);
        return this.archivos;
  }

  showBtnDireccion(event) {
    this.direcci = event.nameBtndireccion;
    this.lat = event.nameLatitud;
    this.lon = event.nameLongitud;
    localStorage.setItem("direccion", this.direcci);
    localStorage.setItem("latitud", this.lat);
    localStorage.setItem("longitud", this.lon);
  }
  archivosImagenes(event) {
    console.log(event);
    this.archivos = event;
    console.log(this.archivos);
  }
}

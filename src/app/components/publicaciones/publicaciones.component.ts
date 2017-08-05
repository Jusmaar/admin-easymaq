import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

  fechas:string[]=['Ultimos 30 dias','Esta semana','Hoy'];
  categorias:string[]=['Autohormiguera','Camion grua','Cargador Frontal','Excavadoras','Dumper'];
  marcas:string[]=['Samsung','Caterpillar'];
  tipos:string[]=['Alquiler','Venta'];
  constructor() { }

  ngOnInit() {
  	console.log(this.fechas);
    console.log(screen.width);
    if (screen.width<630) {
      var tabla = document.getElementById("tabla");
      tabla.classList.add("table-responsive")
    }
    
  }

}

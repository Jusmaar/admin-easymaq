import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicar-nuevo',
  templateUrl: './publicar-nuevo.component.html',
  styleUrls: ['./publicar-nuevo.component.scss']
})
export class PublicarNuevoComponent implements OnInit {
  tipos:string[]=["venta","alquiler"];
  constructor() { }

  ngOnInit() {
  }

}

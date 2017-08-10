import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FileItem } from "../../../models/file-item";

@Component({
  selector: 'app-publicar-editar',
  templateUrl: './publicar-editar.component.html',
  styleUrls: ['./publicar-editar.component.scss']
})
export class PublicarEditarComponent implements OnInit {
  archivos: FileItem[] = [];
  constructor() { }

  ngOnInit() {
  }
  deleteimage(i:number){
        this.archivos.splice(i,1);
        console.log(this.archivos);
        return this.archivos;
  }
}

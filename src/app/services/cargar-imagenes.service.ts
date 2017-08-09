import { Injectable } from '@angular/core';
// import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

import { FileItem } from "../models/file-item";


@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES:string = 'img';
  private CARPETA_DATABASE:string = 'project/fmaquinarias/publicaciones';
  listPreview:any[] = [];

  constructor( ){
    
    if( localStorage.getItem('imagenesLocalStorage') ){
      // Aqui se tendria de alguna manera eliminar las imagenes guardadas en el firebase, si no se han usado.
      this.listPreview=[];
      this.listPreview = localStorage.getItem('imagenesLocalStorage').split(',');
      // localStorage.removeItem('listImagePublicar64');
    }else{
      this.listPreview=[];
      localStorage.removeItem('imagenesLocalStorage');
      // Falta agregar que hacer en este caso
    }
  }
  _existFile64(file64:any,nlimit) {
    let condition=false;
    let listaini: any[]=[];
    if(this.listPreview){
      // if(this.listPreview.length < nlimit){
        listaini = this.listPreview;
        listaini.forEach(element => {
          if(element.img64 == file64.img64){
            condition = true;
          }
        });
      // }
    }
    if(condition){
      return true;
    }else{
      listaini.push(file64);
      localStorage.setItem("listImagePublicar64", JSON.stringify(listaini) );
      return false;
    }
  }
  deleteimagen(i:number){
    let lista:string='';
    let imagesLocal:any[] = localStorage.getItem('imagenesLocalStorage').split(',');
    imagesLocal.splice(i,1);
    // imagesLocal.forEach(element => {
    //   lista = lista+','+element;
    // });
    lista = imagesLocal.join(',');
    console.log(lista);
    localStorage.setItem('imagenesLocalStorage', lista);
    if(lista==''){
      this.listPreview = [];
    }else{
      this.listPreview = lista.split(',');
    }
    console.log(this.listPreview);
  }
  delete64Imagen(i:number){
    // console.log(this.listPreview[i]);
    this.listPreview.splice(i,1);
    localStorage.setItem("listImagePublicar64",  JSON.stringify(this.listPreview) );
    this.deleteimagen(i);
    // console.log(JSON.parse(localStorage.getItem('listImagePublicar64')));
    // console.log(localStorage.getItem('imagenesLocalStorage').split(','));
    return this.listPreview;
  }

  // private guardarImagenFirebaseDatabase( imagen:any ){
  //   this.af.database.list(`/${ this.CARPETA_DATABASE }`)
  //       .push( imagen );
  // }
}

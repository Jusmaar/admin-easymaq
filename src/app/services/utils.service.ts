import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class UtilsService {

  constructor(private http: Http){}

  _getFile64(file:File){
    return new Promise(function (resolve, reject) {
        let reader: FileReader = new FileReader();
        reader.onloadend = function(fileLoadedEvent:any) {
          let src = {img64 : fileLoadedEvent.target.result, posi: -1} // <--- data: base64
          resolve(src);
        }
        reader.readAsDataURL(file);
     });
  }
}
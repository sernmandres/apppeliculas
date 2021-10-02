import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaMDB } from '../interfaces/interfaces';

const URL = environment.url;
const APIKEY = environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  //Inyectar: investigar
  constructor( private http: HttpClient) { }

  private ejecutarQuery<T> (query: string) {
    query = URL + query;
    query += `&api_key=${ APIKEY }&language=es`;
    return this.http.get<T>( query );
  }

  //Metodos nuevos
  getFeatures(  ){
    const hoy = new Date();
    const ultimoDía = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
    const mes = hoy.getMonth() + 1;
    let mesString;

    if(mes < 10) {
      mesString = "0" + mes;
    } else {
      mesString = mes;
    }

    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fin = `${ hoy.getFullYear() }-${ mesString }-${ultimoDía}`;

    console.log("inicio", inicio);
    console.log("fin", fin);

    return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

}

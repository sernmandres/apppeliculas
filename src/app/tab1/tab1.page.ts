import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

 //Generar una variable
 peliculasNuevas: Pelicula[] = [];

 slideOpts = {
  slidesPerView: 1.3,
  freeMode: true
 };

 constructor( private movieServices: MoviesService ) {}

 //nuevo metodo ctrl + space
 ngOnInit() {
   this.movieServices.getFeatures()
   .subscribe( resp => {
     this.peliculasNuevas = resp.results;
   });
 }

}

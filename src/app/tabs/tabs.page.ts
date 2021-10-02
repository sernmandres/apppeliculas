import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit{

  //Generar una variable
  peliculasNuevas: Pelicula[] = [];

  constructor( private movieServices: MoviesService ) {}

  //nuevo metodo ctrl + space
  ngOnInit() {
    this.movieServices.getFeatures()
    .subscribe( resp => {
      this.peliculasNuevas = resp.results;
    });
  }
}

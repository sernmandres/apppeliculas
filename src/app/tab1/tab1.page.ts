import { Component } from '@angular/core';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private moviesService: MoviesService) {}
  peliculasNuevas: Pelicula[] = [];
  populares: Pelicula[] = [];

  ngOnInit() {
    this.moviesService.getFeature().subscribe((res) => {
      // console.log('AWS', res.results);
      this.peliculasNuevas = res.results;
    });

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares().subscribe((res) => {
      const peliculasTemp = [...this.populares, ...res.results];
      this.populares = peliculasTemp;
    });
  }
}

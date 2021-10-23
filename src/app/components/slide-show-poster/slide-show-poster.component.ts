import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slide-show-poster',
  templateUrl: './slide-show-poster.component.html',
  styleUrls: ['./slide-show-poster.component.scss'],
})
export class SlideShowPosterComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3.3,
    freeMode: true,
    speed: 300,
    spaceBetween: 8,
    loop: true,
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle(id: number){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      },
    });
    return modal.present();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }
  banner = [
    {
      img: "assets/images/uth/fondo1.jpg",
      subtitle: "Universidad Tecnologica de Honduras",
      title: "UTH",
      text: "Feria Tecnoligica UTH.<br>Promovemos la mejora constante y el emprendimiento en nuestros estudiantes, impulsando su potencial y premiando su calidad y excelencia."
    },
    {
      img: "assets/images/uth/fondo2.jpg",
      subtitle: "Universidad Tecnologica de Honduras",
      title: "UTH",
      text: "Feria Tecnoligica UTH.<br>Promovemos la mejora constante y el emprendimiento en nuestros estudiantes, impulsando su potencial y premiando su calidad y excelencia."
    },
    {
      img: "assets/images/uth/fondo3.jpg",
      subtitle: "Universidad Tecnologica de Honduras",
      title: "UTH",
      text: "Feria Tecnoligica UTH. Promovemos la mejora constante y el emprendimiento en nuestros estudiantes, impulsando su potencial y premiando su calidad y excelencia."
    }
  ];
  settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: '<span class="prev"><i class="fal fa-angle-left"></i></span>',
    nextArrow: '<span class="next"><i class="fal fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1330,
        settings: {
          arrows: false
        }
      }
    ]
  };

  ngOnInit(): void {
  }

}

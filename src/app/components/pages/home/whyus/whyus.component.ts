import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor() { }
  whychooseus = [
    {
      icon:"fal fa-laptop-code",
      title:"Teconologia",
      text:"En UTH la tecnologia es un pilar fundamental para la educacion"
    },
    {
      icon:"fal fa-cogs",
      title:"Innovacion",
      text:"La educacion promueve el progreso y la innovacion es el impulso que nuestros estudiantes necesitan"
    },
    {
      icon:"fal fa-graduation-cap",
      title:"Especializacion",
      text:"En UTH promovemos la especializacion en las areas mas interesantes para nuestros estudiantes brindando un apoyo constante"
    }
  ];

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Cat } from './Cat';


@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  // à la volée
  myCats : Array<{nom: string, couleur: string, age: number}> = [];

  // avec un objet
  cats : Cat[] = [new Cat("chat1", "green", 3),
                  new Cat("chat2", "blue", 10),
                  new Cat("chat3", "orange", 5)];

  // myStyles: {
  //   'fontSize': '50px';
  //   'color': 'green';
  // }

  constructor() { }

  ngOnInit(): void {

  }

  miauler = (nom: string) => {
    alert(`${nom} miaule!`)
  }




}

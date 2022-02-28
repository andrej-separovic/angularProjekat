import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade1', [
      transition("void => *", [
        style({opacity: 0}),
        animate(2000)
      ])
    ]),
    trigger('fade2', [
      transition("void => *", [
        style({opacity: 0}),
        animate(3500)
      ])
    ]),
    trigger('fade3', [
      transition("void => *", [
        style({opacity: 0}),
        animate(5000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

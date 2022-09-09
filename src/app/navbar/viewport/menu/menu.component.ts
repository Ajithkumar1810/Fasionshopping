import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public slidermin=0;
  public slidermax=100;
  public slidercurrent=50;

  constructor() { }

  ngOnInit(): void {
  }

}

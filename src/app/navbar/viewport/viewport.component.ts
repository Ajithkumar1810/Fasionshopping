import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.css']
})
export class ViewportComponent implements OnInit {
 public menuoption=false;
  constructor() { }

  ngOnInit(): void {
  }
  MenuBarSelected(){
    // if(this.menuoption===true){
    //   this.menuoption=false;
    // }
    // else{
    //   this.menuoption=true;
    // }
    this.menuoption=!this.menuoption;
    
  }
  

}

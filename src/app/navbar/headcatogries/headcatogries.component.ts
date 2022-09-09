import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headcatogries',
  templateUrl: './headcatogries.component.html',
  styleUrls: ['./headcatogries.component.css']
})
export class HeadcatogriesComponent implements OnInit {
  public shopFields:object={text:'Shop',value:'Id'}
  public shopData:Object[]=[{Id:'1',Shop:'Vellore'},{id:'2',Shop:'Chennai'}]
  
  constructor() { }

  ngOnInit(): void {
  }

}

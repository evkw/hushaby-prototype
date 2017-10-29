import { Component, OnInit } from '@angular/core';
import { NapModel, ClothingEnum, SettlingEnum } from './nap.model';

@Component({
  selector: 'app-nap',
  templateUrl: './nap.component.html',
  styleUrls: ['./nap.component.css']
})
export class NapComponent implements OnInit {
  public nap: NapModel;
  public clothing: ClothingEnum;

  constructor() { }

  ngOnInit() {
    this.nap = new NapModel();
  }

}

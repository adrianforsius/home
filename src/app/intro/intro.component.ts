import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {
  title = "adrian forsius";

  constructor() { }

  ngOnInit() {
  }

}

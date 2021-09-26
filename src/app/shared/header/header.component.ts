import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public count = 0;
  constructor() {

  }

  ngOnInit(): void {
  }

}

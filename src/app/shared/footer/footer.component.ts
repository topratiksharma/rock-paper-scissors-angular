import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { RulesComponent } from '../rules/rules.component';

@Component({
  selector: 'rps-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRules() {
    this.dialog.open(RulesComponent);
  }
}

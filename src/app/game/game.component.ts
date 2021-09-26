import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rps-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public myChoice: string;
  public houseChoice: string;
  public counter: number = 3;
  public interval;
  public status: string;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getMyChoice();
    this.startCounter();

  }

  public getMyChoice(): void {
    this.myChoice = this.route.snapshot.paramMap.get('myChoice');
  }

  public startCounter() {
    this.interval = setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
}

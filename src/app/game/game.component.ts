import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHOICES, COMBINATIONS } from './constant';

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
  public result: string;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getMyChoice();
    this.startCounter();
    this.getHouseChoice();
  }

  private getHouseChoice() {
    this.houseChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  }

  private getMyChoice(): void {
    this.myChoice = this.route.snapshot.paramMap.get('myChoice');
  }

  private startCounter() {
    this.interval = setInterval(() => {
      this.counter -= 1;
      if (this.counter === 0) {
        clearInterval(this.interval);
        this.findWinner();
      }
    }, 1000);
  }

  private findWinner() {
    this.result = 'Draw';
    
    if (this.houseChoice === this.myChoice) return;

    if (COMBINATIONS[this.myChoice].includes(this.houseChoice)) {
      this.status = 'win';
      this.result = 'You won';
    } else {
      this.status = 'lose';
      this.result = 'You lose';
    }
  }
}
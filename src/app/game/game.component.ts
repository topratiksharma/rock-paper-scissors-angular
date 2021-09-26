import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CHOICES, COMBINATIONS, GAME_STATUS, PLAYER_STATUS, COUNTER, ONE_SECOND } from './constant';

@Component({
  selector: 'rps-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public myChoice: string;
  public houseChoice: string;
  public counter: number = COUNTER;
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
    }, ONE_SECOND);
  }

  private findWinner() {
    this.result = GAME_STATUS.DRAW;

    if (this.houseChoice === this.myChoice) return;

    if (COMBINATIONS[this.myChoice].includes(this.houseChoice)) {
      this.status = PLAYER_STATUS.WIN;
      this.result = GAME_STATUS.WIN;
    } else {
      this.status = PLAYER_STATUS.LOSE;
      this.result = GAME_STATUS.LOSE;
    }
  }
}
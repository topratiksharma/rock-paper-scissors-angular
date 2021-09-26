export const CHOICES = ["rock", "paper", "scissors", "spock", "lizard"];

export const COMBINATIONS = {
  lizard: ['spock', 'paper'],
  paper: ['rock', 'spock'],
  rock: ['scissors', 'lizards'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors']
}

export enum PLAYER_STATUS {
  WIN = 'win',
  LOSE = 'lose'
}

export const GAME_STATUS = {
  DRAW: 'Draw',
  WIN: 'You Win',
  LOSE: "You Lose"
}

export const COUNTER = 3;
export const ONE_SECOND = 1000;
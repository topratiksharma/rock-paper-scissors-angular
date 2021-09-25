import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { PlayRoutingModule } from './play.routing.module';
import { SharedModule } from '../shared/shared.module';
import { GameModule } from '../game/game.module';

@NgModule({
  declarations: [PlayComponent],
  imports: [CommonModule, PlayRoutingModule, SharedModule, GameModule],
  exports: [PlayComponent]
})

export class PlayModule { }

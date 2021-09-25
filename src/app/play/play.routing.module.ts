import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './play.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: PlayComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PlayRoutingModule { }

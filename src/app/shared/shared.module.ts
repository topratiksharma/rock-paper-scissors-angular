import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, RulesComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [FooterComponent, HeaderComponent]
})

export class SharedModule { }

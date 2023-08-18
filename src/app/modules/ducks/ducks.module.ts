import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DucksComponent } from './ducks.component';
import { DucksRoutingModule } from './../ducks/ducks-routing.module';

@NgModule({
  declarations: [DucksComponent],
  imports: [CommonModule, DucksRoutingModule],
})
export class DucksModule {}

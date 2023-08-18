import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DucksComponent } from './ducks.component';
import { DucksRoutingModule } from './../ducks/ducks-routing.module';
import { DucksListComponent } from './ducks-list/ducks-list.component';
import { AngularMaterialModule } from './../../shared/modules/angular-material/angular-material.module';

@NgModule({
  declarations: [DucksComponent, DucksListComponent],
  imports: [CommonModule, DucksRoutingModule, AngularMaterialModule],
})
export class DucksModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DucksComponent } from './ducks.component';
import { DucksRoutingModule } from './../ducks/ducks-routing.module';
import { DucksListComponent } from './ducks-list/ducks-list.component';
import { AngularMaterialModule } from './../../shared/modules/angular-material/angular-material.module';
import { AddEditDuckComponent } from './add-edit-duck/add-edit-duck.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DucksRepositoryService } from 'src/app/core/services/ducks-repository.service';

@NgModule({
  declarations: [DucksComponent, DucksListComponent, AddEditDuckComponent],
  imports: [
    CommonModule,
    DucksRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DucksRepositoryService],
})
export class DucksModule {}

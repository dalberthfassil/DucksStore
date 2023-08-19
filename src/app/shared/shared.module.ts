import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AddUnitsPipe } from './pipes/add-units.pipe';
const elements = [SideNavComponent, AddUnitsPipe];
@NgModule({
  declarations: [SideNavComponent, AddUnitsPipe],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [...elements],
})
export class SharedModule {}

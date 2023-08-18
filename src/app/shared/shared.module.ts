import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

@NgModule({
  declarations: [SideNavComponent],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [SideNavComponent],
})
export class SharedModule {}

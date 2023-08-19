import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { AddUnitsPipe } from './pipes/add-units.pipe';
import { YesNoQuestionDialogComponent } from './components/yes-no-question-dialog/yes-no-question-dialog.component';
import { LotOrderPipe } from './pipes/lot-order.pipe';
const elements = [
  SideNavComponent,
  AddUnitsPipe,
  YesNoQuestionDialogComponent,
  LotOrderPipe,
];
@NgModule({
  declarations: [...elements],
  imports: [CommonModule, RouterModule, AngularMaterialModule],
  exports: [...elements],
})
export class SharedModule {}

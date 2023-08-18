import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DucksComponent } from './ducks.component';
const routes: Routes = [
  {
    path: '',
    component: DucksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DucksRoutingModule {}

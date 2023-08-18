import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ducks } from 'src/app/core/modules/ducks.interface';
import { DucksRepositoryService } from 'src/app/core/services/ducks-repository.service';
import { AddEditDuckComponent } from './add-edit-duck/add-edit-duck.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html',
  styleUrls: ['./ducks.component.css'],
})
export class DucksComponent implements OnInit {
  ducks: Ducks[] = [];
  private stateSubscription?: Subscription;
  constructor(
    private ducksRepository: DucksRepositoryService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log('on init duck padre');
    this.stateSubscription = this.ducksRepository
      .getDucks()
      .subscribe((resp) => {
        this.ducks = resp;
        console.log('on init resp ', resp);
      });
  }
  ngOnDestroy() {
    if (this.stateSubscription) this.stateSubscription.unsubscribe();
  }
  openAddDuck() {
    const dialogRef = this.matDialog.open(AddEditDuckComponent, {
      data: { name: 'this.name', animal: 'asdf' },
    });
    dialogRef.afterClosed().subscribe((item: Ducks) => {
      console.log('The dialog was closed');
      if (item) {
        this.addDuck(item);
      }
    });
  }
  addDuck(duck: Ducks) {
    this.ducksRepository.addDuck(duck).subscribe(
      (resp) => {
        console.log(resp);
      },
      (error) => {
        alert(error);
      }
    );
  }
}

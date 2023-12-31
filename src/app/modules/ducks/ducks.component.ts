import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Ducks, OrderType } from 'src/app/core/modules/ducks.interface';
import { DucksRepositoryService } from 'src/app/core/services/ducks-repository.service';
import { AddEditDuckComponent } from './add-edit-duck/add-edit-duck.component';
import { Subscription, map } from 'rxjs';
import { MatTable } from '@angular/material/table';
import { YesNoQuestionDialogComponent } from 'src/app/shared/components/yes-no-question-dialog/yes-no-question-dialog.component';
import { LotOrderPipe } from './../../shared/pipes/lot-order.pipe';

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html',
  styleUrls: ['./ducks.component.css'],
})
export class DucksComponent implements OnInit {
  ducks: Ducks[] = [];
  currentDuck = new Set<Ducks>();
  dataSource: Ducks[] = [];
  orderPipe = OrderType;
  @ViewChild(MatTable) table!: MatTable<Ducks>;
  itemUpdated = -1;
  displayedColumns: string[] = [
    'id',
    'title',
    'color',
    'size',
    'lot',
    'price',
    'actions',
  ];
  private stateSubscription?: Subscription;
  constructor(
    private ducksRepository: DucksRepositoryService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.stateSubscription = this.ducksRepository
      .getDucks()
      .pipe(map((data) => data.filter((duck) => !duck.isErased)))
      .subscribe((resp) => {
        this.ducks = resp;
        this.dataSource = this.ducks.map((duck) => ({
          ...duck,
          actions: '',
        }));
      });
  }
  ngOnDestroy() {
    if (this.stateSubscription) this.stateSubscription.unsubscribe();
  }
  openDialogToAdd() {
    const dialogRef = this.matDialog.open(AddEditDuckComponent, {
      data: '',
    });
    dialogRef.afterClosed().subscribe((item: Ducks) => {
      if (item) {
        this.addDuck(item);
      }
    });
  }
  openDialogToDelete(duckId: number) {
    const dialogRef = this.matDialog.open(YesNoQuestionDialogComponent, {
      data: '',
    });
    dialogRef.afterClosed().subscribe((resp: boolean) => {
      if (resp) {
        this.onDeleteDuck(duckId);
      }
    });
    ('');
  }

  addDuck(duck: Ducks) {
    this.ducksRepository.addDuck(duck).subscribe(
      (resp) => {
        const index = this.ducks.findIndex((item) => {
          return (
            item.id == resp.id &&
            item.color == resp.color &&
            item.size == resp.size &&
            item.price == resp.price
          );
        });
        this.itemUpdated = index;
      },
      (error) => {
        alert(error);
      }
    );
  }
  onUpdateDuck(duck: Ducks) {
    this.ducksRepository.updateDuck(duck);
    const index = this.findDuckIndexById(duck.id);
    this.itemUpdated = index;
  }
  onDeleteDuck(duckId: number) {
    this.ducksRepository.deleteDuck(duckId);
  }
  openEditDuck(item: Ducks) {
    const dialogRef = this.matDialog.open(AddEditDuckComponent, {
      data: item,
    });
    dialogRef.afterClosed().subscribe((item: Ducks) => {
      if (item) {
        this.onUpdateDuck(item);
      }
    });
  }
  findDuckIndexById(id: number) {
    const sortedData = this.dataSource.slice();

    const orderedData = new LotOrderPipe().transform(
      sortedData,
      this.orderPipe.descendente
    );
    return orderedData.findIndex((item) => item.id === id);
  }
  applyFilter(filter: any) {
    const filterValue = filter.target.value;
    this.dataSource = this.ducks.filter((item) => {
      return (
        item.title.toLowerCase().includes(filterValue) ||
        item.color.toLowerCase().includes(filterValue) ||
        item.size.toLowerCase().includes(filterValue) ||
        item.price.toString().includes(filterValue) ||
        item.lot.toString().includes(filterValue)
      );
    });
  }
}

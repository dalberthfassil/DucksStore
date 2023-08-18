import { Component, Input, OnInit } from '@angular/core';
import { Colors, Ducks, Sizes } from 'src/app/core/modules/ducks.interface';
import { DucksRepositoryService } from 'src/app/core/services/ducks-repository.service';

@Component({
  selector: 'app-ducks-list',
  templateUrl: './ducks-list.component.html',
  styleUrls: ['./ducks-list.component.css'],
})
export class DucksListComponent implements OnInit {
  constructor() {}
  dataSource: Ducks[] = [];
  @Input() ducks: Ducks[] = [
    {
      id: 1,
      title: 'defaul',
      size: Sizes.XLarge,
      color: Colors.Red,
      price: 123,
      lot: 12,
      isErased: true,
    },
  ];
  displayedColumns: string[] = [
    'id',
    'title',
    'color',
    'size',
    'lot',
    'price',
    'actions',
  ];

  ngOnInit() {
    this.dataSource = this.ducks.map((duck) => ({
      ...duck,
      actions: '',
    }));
  }
}

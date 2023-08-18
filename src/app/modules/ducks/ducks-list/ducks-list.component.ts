import { Component, Input, OnInit } from '@angular/core';
import { Colors, Ducks, Sizes } from 'src/app/core/modules/ducks.interface';

@Component({
  selector: 'app-ducks-list',
  templateUrl: './ducks-list.component.html',
  styleUrls: ['./ducks-list.component.css'],
})
export class DucksListComponent implements OnInit {
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
  displayedColumns: string[] = ['id', 'title', 'color', 'size'];
  dataSource: Ducks[] = [...this.ducks];
  ngOnInit() {
    console.log('data', this.ducks);
  }
}

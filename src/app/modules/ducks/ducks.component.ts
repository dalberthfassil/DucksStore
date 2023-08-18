import { Component, OnInit } from '@angular/core';
import { Ducks } from 'src/app/core/modules/ducks.interface';
import { DucksRepositoryService } from 'src/app/core/services/ducks-repository.service';

@Component({
  selector: 'app-ducks',
  templateUrl: './ducks.component.html',
  styleUrls: ['./ducks.component.css'],
})
export class DucksComponent implements OnInit {
  ducks: Ducks[] = [];
  constructor(private ducksRepository: DucksRepositoryService) {}
  ngOnInit(): void {
    this.ducksRepository.getDucks().subscribe((resp) => {
      this.ducks = resp;
    });
  }
}

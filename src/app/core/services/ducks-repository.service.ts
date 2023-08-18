import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ducks } from '../modules/ducks.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DucksRepositoryService {
  private baseUrl = './../../../assets/ducks.json';
  private ducks: Ducks[] = [];
  private ducksSubject = new BehaviorSubject<Ducks[]>([]);

  constructor(private httpService: HttpClient) {}

  getDucks(): Observable<Ducks[]> {
    const resp = this.httpService.get<Ducks[]>(this.baseUrl);
    resp.subscribe((data) => {
      this.ducks = data;
      this.ducksSubject.next(this.ducks);
    });
    return this.ducksSubject.asObservable();
  }

  addDuck(duck: Ducks): Observable<Ducks> {
    const existinDuck = this.ducks.findIndex((item) => {
      return (
        item.price == duck.price &&
        item.color == duck.color &&
        item.size == duck.size
      );
    });

    //already exists
    if (existinDuck >= 0) {
      const updateDuck = this.ducks.map((item) => {
        if (
          item.price == duck.price &&
          item.color == duck.color &&
          duck.size == duck.size
        ) {
          return { ...item, lot: item.lot + duck.lot };
        }
        return item;
      });

      if (updateDuck) {
        this.ducks = updateDuck;
      }
      this.ducksSubject.next(this.ducks);
      return of(this.ducks[existinDuck]);
    }

    duck.id = Date.now();
    this.ducks = [...this.ducks, duck];
    this.ducksSubject.next(this.ducks);
    return of(duck);
  }
}

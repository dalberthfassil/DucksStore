import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Ducks } from '../modules/ducks.interface';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DucksRepositoryService {
  private baseUrl = './../../../assets/ducks.json';
  private ducks: Ducks[] = [];
  private ducksSubject = new BehaviorSubject<Ducks[]>([]);

  constructor(private httpService: HttpClient) {
    this.fetchDucks();
  }

  private fetchDucks(): void {
    this.httpService
      .get<Ducks[]>(this.baseUrl)
      .pipe(
        tap((data) => {
          this.ducks = data;
          this.ducksSubject.next(this.ducks);
        })
      )
      .subscribe();
  }
  getDucks(): Observable<Ducks[]> {
    return this.ducksSubject.asObservable();
  }

  addDuck(duck: Ducks): Observable<Ducks> {
    const existingDuckIndex = this.findDuckIndex(duck);

    if (existingDuckIndex >= 0) {
      const updatedDucks = this.ducks.map((item) =>
        item === this.ducks[existingDuckIndex]
          ? { ...item, lot: item.lot + duck.lot }
          : item
      );
      this.updateDucksAndEmit(updatedDucks);
      return of(this.ducks[existingDuckIndex]);
    }

    const newId =
      this.ducks.length > 0 ? this.ducks[this.ducks.length - 1].id + 1 : 1;
    duck.id = newId;
    this.ducks.push(duck);
    this.updateDucksAndEmit(this.ducks);
    return of(duck);
  }

  updateDuck(duck: Ducks): void {
    console.log('llegando update', duck);
    const existingDuckIndex = this.findDuckIndexById(duck.id);

    if (existingDuckIndex >= 0) {
      const updatedDucks = this.ducks.map((item) =>
        item.id === duck.id
          ? { ...item, lot: duck.lot, price: duck.price }
          : item
      );
      console.log('el final segun', updatedDucks);
      this.updateDucksAndEmit(updatedDucks);
      console.log('was updated');
    }
  }
  deleteDuck(duckId: number): void {
    const existingDuckIndex = this.findDuckIndexById(duckId);

    if (existingDuckIndex >= 0) {
      const updatedDucks = this.ducks.map((item) =>
        item === this.ducks[existingDuckIndex]
          ? { ...item, isErased: true }
          : item
      );
      this.updateDucksAndEmit(updatedDucks);
      console.log('was deleted');
    }
  }
  private findDuckIndex(targetDuck: Ducks): number {
    return this.ducks.findIndex(
      (item) =>
        item.id === targetDuck.id &&
        item.price === targetDuck.price &&
        item.color === targetDuck.color &&
        item.size === targetDuck.size
    );
  }

  private findDuckIndexById(duckId: number): number {
    return this.ducks.findIndex((item) => item.id === duckId);
  }

  private updateDucksAndEmit(updatedDucks: Ducks[]): void {
    this.ducks = updatedDucks;
    this.ducksSubject.next(this.ducks);
    console.log('updated duck', this.ducks);
  }
}

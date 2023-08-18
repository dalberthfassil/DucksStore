import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ducks } from '../modules/ducks.interface';
import { BehaviorSubject, Observable } from 'rxjs';

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
}

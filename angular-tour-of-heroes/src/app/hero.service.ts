import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messagesService.add('HeroService: fetched heroes');
    return heroes;


  }
}

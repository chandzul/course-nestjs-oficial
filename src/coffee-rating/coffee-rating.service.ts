import { Injectable } from '@nestjs/common';
import { CoffeesService } from '../coffees/coffees.service';

@Injectable()
export class CoffeeRatingService {
  constructor(private readonly coffeesService: CoffeesService) {
    // select 'grant all on '||schemaname||'.'||tablename||' to $postgres;' from pg_tables where schemaname in ('$public') order by schemaname, tablename;
  }
}

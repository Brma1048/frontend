import { Trip } from './trip';
import { Driver } from './driver';
import { Car } from './car';

export class Logbook {
    id: number;
    // trips: Array<Trip>;
    driver: Driver;
    car: Car;
}

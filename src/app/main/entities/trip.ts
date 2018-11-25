import { Car } from "./car";
import { Driver } from "./driver";
import { WayPoints } from './waypoints';

export class Trip {
    id: string;
    driver: Driver;
    car: Car;
    logbookid: string;
    
    tripBusiness: boolean;
    startOdometer: number;
    endOdometer: number;
    wayPoints: Array<WayPoints>; //TODO
    customerName: string;
    projectName: string;
    startDate: Date;
    endDate: Date;

}
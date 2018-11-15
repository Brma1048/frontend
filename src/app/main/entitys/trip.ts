import { Car } from "./car";
import { Driver } from "./driver";
import { WayPoints } from './waypoints';

export class Trip {
    id: string;
    gpsStart: string;
    gpsEnd: string;
    tripBusiness: boolean;
    startOdometer: number;
    endOdometer: number;
    wayPoints: Array<WayPoints>; //TODO
    customerName: string;
    projectName: string;
    date: Date;

    car: Car;

}
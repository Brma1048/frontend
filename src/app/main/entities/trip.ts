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

export interface TripResponse {
      logbookid: string;
      firstname: string;
      lastname: string;
      driverid: string;
      art: boolean;
      startOdometer: number;
      endOdometer: number;
      customerName: string;
      projectName: string;
      startDate: Date;
      endDate: Date;
}
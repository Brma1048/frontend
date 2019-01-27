import { WayPoints } from './waypoints';

export class NewTrip {
    isBusiness: boolean;
    startOdometer: number;
    endOdometer: number;
    endWaypoint: WayPoints;
    startWaypoint: WayPoints;
    customerName: string;
    projectName: string;
    startDate: Date;
    endDate: Date;
}
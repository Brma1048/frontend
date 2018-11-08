export class Trip {
    id: string;
    gpsStart: string;
    gpsEnd: string;
    tripBusiness: boolean;
    startOdometer: number;
    endOdometer: number;
    wayPoints: Array<string>; //TODO
    customerName: string;
    projectName: string;

}
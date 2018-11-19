import { Trip } from "./trip";
import { Driver } from "./driver";

export class Logbook{
    id:string;
    trips: Array<Trip>;
    driver: Driver;
}
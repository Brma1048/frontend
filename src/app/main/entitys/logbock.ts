import { Trip } from "./trip";
import { Driver } from "./driver";

export class Logbock{
    id:string;
    trips: Array<Trip>;
    driver: Driver;
}
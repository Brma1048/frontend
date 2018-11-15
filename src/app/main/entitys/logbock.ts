import { Trip } from "./trip";
import { Driver } from "selenium-webdriver/safari";

export class Logbock{
    trips: Array<Trip>
    driver: Driver;
}
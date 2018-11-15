import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trip } from './main/entitys/trip';
import { Logbock } from './main/entitys/logbock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let logbocks = [
        {
          "trips" : [
            {
              "id": "1",
              "gpsStart": "N50.418716° , E006.750000°",
              "gpsEnd": "N50.318516° , E006.750000°",
              "tripBuinsness": true,
              "startOdometer": 25698,
              "endOdometer": 25700,
              "wayPoints": [
                      "N50.418716° , E006.750000°",
                      "N50.418816° , E006.750000°",
                      "N50.418916° , E006.750000°",
                      "N50.419016° , E006.750000°"
              ],
              "customerName": "CAS Software AG",
              "projectName": "Microservices"

            }
          ],
          "driver": [
            {
              "id": "1",
              "name" : "Hans"
            }
          ]
        }
      ]
        
    return {logbocks};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(logbocks: Logbock[]): number {
    return logbocks.length > 0 ? Math.max(...logbocks.map(Logbock => Logbock.trips[0].startOdometer)) + 1 : 11;
  }
}
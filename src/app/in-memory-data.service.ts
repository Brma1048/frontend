import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trip } from './main/entitys/trip';
import { Logbock } from './main/entitys/logbock';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      let logbocks = [
        {
            "trips": [
            {
              "id": "543",
              "gpsStart": {
              "gps_lat": "9.197702072",
              "gps_lon": "48.892182404"
              },
              "gpsEnd": {
                "gps_lat": "9.197702072",
                "gps_lon": "48.892182404"
              },
              "tripBusiness": true,
              "startOdometer": 44423.776,
              "endOdometer": 45635.75,
              "wayPoints": [
                  {
                  "gps_lat": "9.197702072",
                  "gps_lon": "48.892182404"
                  }
              ],
              "customerName": "IBM",
              "projectName": "Fleet Management",
              "startDate": "3919-06-19T21:14:00.000+0000",
              "endDate": "3914-03-11T10:03:00.000+0000",
              "car": {
              "carModel": "911",
              "carBrand": "Porsche",
              "id": "24"
              }
            }
            ],
            "driver": {
              "id": "123",
              "name": "Peter",
              "surname": "Hans",
              "email": "email@test.de"
            },
            "id": "123",
            "_links": {
            "self": {
            "href": "http://localhost:8080/logbook/123"
            }
            }
          },
          {
            "trips": [
            {
              "id": "543",
              "gpsStart": {
              "gps_lat": "9.197702072",
              "gps_lon": "48.892182404"
              },
              "gpsEnd": {
                "gps_lat": "9.197702072",
                "gps_lon": "48.892182404"
              },
              "tripBusiness": true,
              "startOdometer": 44552423.776,
              "endOdometer": 45635.75,
              "wayPoints": [
                  {
                  "gps_lat": "9.197702072",
                  "gps_lon": "48.892182404"
                  }
              ],
              "customerName": "IBM",
              "projectName": "Fleet Management",
              "startDate": "3919-06-19T21:14:00.000+0000",
              "endDate": "3914-03-11T10:03:00.000+0000",
              "car": {
              "carModel": "911",
              "carBrand": "Porsche",
              "id": "24"
              }
            }
            ],
            "driver": {
              "id": "123",
              "name": "Peter",
              "surname": "Hans",
              "email": "email@test.de"
            },
            "id": "5",
            "_links": {
            "self": {
            "href": "http://localhost:8080/logbook/5"
            }
            }
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
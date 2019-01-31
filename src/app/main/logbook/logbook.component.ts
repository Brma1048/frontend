import { Component, OnInit } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { LogbookService} from "./logbook.service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { KeycloakService } from '../../keycloak.service';

@Component({
  selector: 'app-logbook',
  templateUrl: './logbook.component.html',
  styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {

   // Meta
  selectedLogbook: Logbook;
  onSelect(logbook: Logbook): void{
    this.selectedLogbook = logbook;
  }

  ismanager: string;

  logbooks : Logbook[];
  logbook: Logbook;
  logbookid: string;
  logbookDriverLastName: string;
  noresults: boolean = false;


 // Check the results
  checkResults(id: number): void{
    switch(id){
      case 1:
        if(this.logbooks == null){
          this.noresults = true;
        }
        else{
          this.noresults = false;
        }
        break;
      case 2:
        if(this.logbook == null){
          this.noresults = true;
        }
        else{
          this.noresults = false;
        }
        break;

      
    }
  }
  
  // Get my Logbooks [Employee]
  getMyLogbooks(): void{
    this.logbooks = null;
    this.logbook = null;
    this.logbookService.getMyLogbooks()
        .subscribe(logbook => this.logbook = logbook,
        () => (this.checkResults(2)),
        () => this.checkResults(2)
      );
  }

  // Get all Logbooks [Manager]
  getLogbooks(): void{
    this.logbook = null;
    this.logbooks = null;
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks,
          () => (this.checkResults(1)),
          () => this.checkResults(1)
        );
  }

  // Get logbook by id [Manager]
  getLogbook(): void{
    this.logbooks = null;
    this.logbook = null;
    this.logbookService.getLogbook(this.logbookid)
        .subscribe(logbook => this.logbook = logbook,
        () => (this.checkResults(2)),
        () => this.checkResults(2)
      );
  }

  // Get Logbook by driver last name [Manager]
  getLogbookByDriverLastName(): void{
    this.logbookService.getLogbookByDriverLastName(this.logbookDriverLastName)
        .subscribe(logbook => this.logbook = logbook);
  }

  // Show-Methods
  showMyLogbooks(): void{
    this.getMyLogbooks();
  }

  showLogbooks(): void {
    this.getLogbooks();
  }
  showLogbookByID(): void{
    this.getLogbook();
  }
  showLogbookByDriverLastName(): void{
    this.getLogbookByDriverLastName();
  }
  
  constructor(
    private logbookService: LogbookService,
    private route: ActivatedRoute,
    private location: Location,
    private keycloakService: KeycloakService) { }

  
  ngOnInit() {
    this.ismanager = this.keycloakService.getUserRole();
    
  }

}

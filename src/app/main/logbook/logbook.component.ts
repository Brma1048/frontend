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

  selectedLogbook: Logbook;
  onSelect(logbook: Logbook): void{
    this.selectedLogbook = logbook;
  }

  ismanager: string;

  logbooks : Logbook[];
  logbook: Logbook;
  logbookid: string;
  logbookDriverLastName: string;
  keineergebnisse: boolean = false;



  checkergebnisse(id: number): void{
    switch(id){
      case 1:
        if(this.logbooks == null){
          this.keineergebnisse = true;
        }
        else{
          this.keineergebnisse = false;
        }
        break;
      case 2:
        if(this.logbook == null){
          this.keineergebnisse = true;
        }
        else{
          this.keineergebnisse = false;
        }
        break;

      
    }
  }
  /*getLogbooks(): void{
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks);
  }*/
  getMyLogbooks(): void{
    //this.logbook = this.logbookService.getLogbook(this.logbookid);
    this.logbooks = null;
    this.logbook = null;
    this.logbookService.getMyLogbooks()
        .subscribe(logbook => this.logbook = logbook,
        () => (this.checkergebnisse(2)),
        () => this.checkergebnisse(2)
      );
  }

  getLogbooks(): void{
    //this.logbooks = this.logbookService.getLogbooks();
    this.logbook = null;
    this.logbooks = null;
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks,
          () => (this.checkergebnisse(1)),
          () => this.checkergebnisse(1)
        );}
  getLogbook(): void{
    //this.logbook = this.logbookService.getLogbook(this.logbookid);
    this.logbooks = null;
    this.logbook = null;
    this.logbookService.getLogbook(this.logbookid)
        .subscribe(logbook => this.logbook = logbook,
        () => (this.checkergebnisse(2)),
        () => this.checkergebnisse(2)
      );
  }

  getLogbookByDriverLastName(): void{
    this.logbookService.getLogbookByDriverLastName(this.logbookDriverLastName)
        .subscribe(logbook => this.logbook = logbook);
  }


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

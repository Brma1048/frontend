import { Component, OnInit } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { LogbookService} from "./logbook.service";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

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

  logbooks : Logbook[];
  logbook: Logbook;
  logbookid: number;
  logbookDriverLastName: string;
  keineergebnisse: boolean = false;

  checkergebnisse(id: number): void{
    switch(id){
      case 1:
        if(this.logbooks == null){
          this.keineergebnisse = true;
        }
        break;
      case 2:
        if(this.logbook == null){
          this.keineergebnisse = true;
        }
        break;

      
    }
  }
  /*getLogbooks(): void{
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks);
  }*/
  getLogbooks(): void{
    //this.logbooks = this.logbookService.getLogbooks();
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks,
          () => (this.checkergebnisse(1),alert("DB Fehler")),
          () => this.checkergebnisse(1)
        );}
  getLogbook(): void{
    //this.logbook = this.logbookService.getLogbook(this.logbookid);
    this.logbookService.getLogbook(this.logbookid)
        .subscribe(logbook => this.logbook = logbook,
        () => (this.checkergebnisse(2),alert("DB Fehler")),
        () => this.checkergebnisse(2)
      );
  }

  getLogbookByDriverLastName(): void{
    this.logbookService.getLogbookByDriverLastName(this.logbookDriverLastName)
        .subscribe(logbook => this.logbook = logbook);
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
    private location: Location) { }

  
  ngOnInit() {
    //this.showLogbooks();
  }

}

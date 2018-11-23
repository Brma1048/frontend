import { Component, OnInit } from '@angular/core';
import { Logbook } from '../entities/logbook';
import { LogbookService} from "./logbook.service";

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

  /*getLogbooks(): void{
    this.logbookService.getLogbooks()
        .subscribe(logbooks => this.logbooks = logbooks);
  }*/
  getLogbooks(): void{
    this.logbooks = this.logbookService.getLogbooks();
  }


  getLogbook(): void{
    const id = this.logbookid;
    this.logbookService.getLogbook(id)
      .subscribe(logbook => this.logbook = logbook);
  }
  


  showLogbooks(): void {
    this.getLogbooks();
  }
  showLogbookbyID(): void{
    this.getLogbook();
  }
  constructor(private logbookService: LogbookService) { }

  
  ngOnInit() {
    //this.showLogbooks();
  }

}

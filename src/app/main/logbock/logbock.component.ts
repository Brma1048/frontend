import { Component, OnInit } from '@angular/core';
import { Logbock } from '../entitys/logbock';
import { LogbockService} from "./logbock.service";

@Component({
  selector: 'app-logbock',
  templateUrl: './logbock.component.html',
  styleUrls: ['./logbock.component.css']
})
export class LogbockComponent implements OnInit {

  selectedLogbock: Logbock;
  onSelect(logbock: Logbock): void{
    this.selectedLogbock = logbock;
  }

  logbocks : Logbock[];
  logbock: Logbock;
  logbockid: number;

  getLogbocks(): void{
    this.logbockService.getLogbocks()
        .subscribe(logbocks => this.logbocks = logbocks);
  }
  getLogbock(): void{
    const id = this.logbockid;
    this.logbockService.getLogbock(id)
      .subscribe(logbock => this.logbock = logbock);
  }

  showLogbocks(): void {
    this.getLogbocks();
  }
  showLogbockbyID(): void{
    this.getLogbock();
  }
  constructor(private logbockService: LogbockService) { }

  
  ngOnInit() {
    //this.showLogbocks();
  }

}

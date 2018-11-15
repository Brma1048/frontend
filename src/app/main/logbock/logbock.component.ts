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

  getLogbocks(): void{
    this.logbockService.getLogbocks()
        .subscribe(logbocks => this.logbocks = logbocks);
  }
  showLogbocks(): void {
    this.getLogbocks();
  }
  constructor(private logbockService: LogbockService) { }

  
  ngOnInit() {
    this.showLogbocks();
  }

}

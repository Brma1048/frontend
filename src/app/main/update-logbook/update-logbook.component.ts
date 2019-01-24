import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogbookService } from '../logbook/logbook.service';
import { Logbook } from '../entities/logbook';
import { Driver } from '../entities/driver';

@Component({
  selector: 'app-update-logbook',
  templateUrl: './update-logbook.component.html',
  styleUrls: ['./update-logbook.component.css']
})
export class UpdateLogbookComponent implements OnInit {

  logbookgiven: string;
  updatetlogbook: Logbook = new Logbook;
  driver: Driver = new Driver;
  logbook: Logbook;
  drivercheck: Driver;


  updateLogbook(): void{
    const InputLogbookId = (<HTMLInputElement>document.getElementById("logbookid"));
    const InputDriverEmail = (<HTMLInputElement>document.getElementById("driveremail"));

    //Validation
    if(this.logbookgiven == null && InputLogbookId.value == ""){
      return alert("Please enter a Logbook ID!");
    }
    if(InputDriverEmail.value == ""){
      return alert("Please enter a Driver E-Mail!");
    }


    // Weiter

    if(this.logbookgiven != null){
      this.updatetlogbook.id = this.logbookgiven;
    }
    else{
      this.updatetlogbook.id = InputLogbookId.value;
    }
    this.driver.email = InputDriverEmail.value;

    this.updatetlogbook.driver = this.driver;


      this.logbookService.getDriver(this.driver.email)
      .subscribe(drivercheck => this.drivercheck = drivercheck,
        ()=>(alert("Found no Driver!")),
        ()=>(
          this.logbookService.updateLogbook(this.updatetlogbook)
        )
      )


    
    //this.logbookService.updateLogbook(this.updatetlogbook);
    //this.logbookService
  }

  getrouteparam():void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.logbookgiven = id.toString();
    }
  }

  constructor(
    private logbookService: LogbookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getrouteparam();
  }

}

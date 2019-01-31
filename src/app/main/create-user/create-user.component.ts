import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { CreateUserService } from './create-user.service';
import { Driver } from '../entities/driver';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser: User = new User;
  newDriver: Driver = new Driver;

  createUser():void{

    // Input-Fields
    const InputUsername = (<HTMLInputElement>document.getElementById("username"));
    const InputEmail = (<HTMLInputElement>document.getElementById("email"));
    const InputPrename = (<HTMLInputElement>document.getElementById("prename"));
    const InputName = (<HTMLInputElement>document.getElementById("name"));
    const InputPassword = (<HTMLInputElement>document.getElementById("password"));

    this.newUser.email = InputEmail.value;
    this.newUser.username = InputUsername.value,
    this.newUser.prename = InputPrename.value,
    this.newUser.name = InputName.value;

    this.newDriver.email = InputEmail.value;
    this.newDriver.lastName = InputName.value;
    this.newDriver.firstName = InputPrename.value;


    // Validation
    if(InputUsername.value ==""||InputEmail.value ==""||InputPrename.value ==""||InputName.value ==""||InputPassword.value ==""){
      return alert("There are empty fields!");
    }

    // JSON-Object for User
    const obj: any =
    {
       
       
      "username": InputUsername.value,
      "firstName": InputPrename.value,
      "lastName": InputName.value,
      "email": InputEmail.value,
      "enabled": true,
      "credentials" : [{
        "type" : "password",
        "value" : InputPassword.value}
        ],
  "realmRoles": [
    "user", "offline_access" 
    ], 
  "clientRoles": {
    "account": [
      "manage-account" ] }
}

    this.createuserService.createUser(obj,this.newDriver);
  }
  
  
  
  constructor(
    private createuserService: CreateUserService
  ) { }




  ngOnInit() {
  }

}

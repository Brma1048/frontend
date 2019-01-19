import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { CreateUserService } from './create-user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  newUser: User = new User;

  createUser():void{
    const InputUsername = (<HTMLInputElement>document.getElementById("username"));
    const InputEmail = (<HTMLInputElement>document.getElementById("email"));
    const InputPrename = (<HTMLInputElement>document.getElementById("prename"));
    const InputName = (<HTMLInputElement>document.getElementById("name"));

    this.newUser.email = InputEmail.value;
    this.newUser.username = InputUsername.value,
    this.newUser.prename = InputPrename.value,
    this.newUser.name = InputName.value;

    this.createuserService.createUser(this.newUser);
  }
  
  
  
  constructor(
    private createuserService: CreateUserService
  ) { }




  ngOnInit() {
  }

}

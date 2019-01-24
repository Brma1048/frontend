import { Injectable } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders }    from '@angular/common/http';
import { Driver } from './main/entities/driver';


declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  userrole: string;
  ismanager: boolean = false;
  userindata: boolean = false;
  driver: Driver;


  private keycloakAuth: any;
  init(): Promise<any> {
  return new Promise((resolve, reject) => {
      const config = {
        'url': 'http://localhost:8081/auth',
        'realm': 'demo',
        'clientId': 'Frontend'
      };
      this.keycloakAuth = new Keycloak(config);
      this.keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          this.setUserRole(this.keycloakAuth.idTokenParsed.preferred_username);
          resolve();
        })
        .error(() => {
          reject();
        });
      });
  }
  getToken(): string {
    return this.keycloakAuth.token;
    
  }
  getUserMail(){
    return this.keycloakAuth.idTokenParsed.email;
  }
  checkManager(){
    if((this.keycloakAuth.realmAccess.roles[0] == "manager")||(this.keycloakAuth.realmAccess.roles[1] == "manager")||(this.keycloakAuth.realmAccess.roles[2] == "manager")){
      this.ismanager = true;
    }
    else{
    }
  }
  setUserRole(role: string): void{
    this.userrole = role;
    console.log("Rolle: "+this.userrole);
  }
  getUserRole(){
    return this.userrole;
  }



  constructor(
    private http: HttpClient,
  ) { }
}

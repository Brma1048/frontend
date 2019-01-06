import { Injectable } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  userrole: string;

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
          console.log(this.keycloakAuth);
          console.log(this.keycloakAuth.idTokenParsed.preferred_username);
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
  setUserRole(role: string): void{
    this.userrole = role;
    console.log("Rolle: "+this.userrole);
  }
  
  constructor() { }
}

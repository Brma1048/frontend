import { Injectable } from '@angular/core';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
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
  getroles(): string{
    return this.keycloakAuth.roles;
  }
  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;

  constructor() { }
}

signup(email: string, password: string) {
  return this.http.post<AuthResponseData>('',
  {
    email: email,
    password: password,
    returnSecureToken: true
  }
}



login(email: string, password: string) {
  return this.http.post<AuthResponseData>('',
  {
    email: email,
    password: password,
    returnSecureToken: true
  }
  );
}


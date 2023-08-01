import * as jwtDecode from 'jwt-decode';

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtService {
  decodeToken(token: string): any {
    try {
      return jwtDecode.default(token);
    } catch (error) {
      console.error('Failed to decode JWT token:', error);
      return null;
    }
  }
}

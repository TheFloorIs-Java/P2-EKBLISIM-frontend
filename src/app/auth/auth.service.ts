import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isVerified: boolean = false;
  constructor() { }

  loginAuthenticated(nameOnFile: String,
                      nameEntered: String,
                      passOnFile: String,
                      passEntered: String): Boolean {
    // Default to false until determined to be true.
    this.isVerified = false;
    if (nameOnFile === nameEntered &&
      passOnFile === passEntered) {
        this.isVerified = true;
      }
      return this.isVerified;
  }

  getIsVerified(): boolean {
    return this.isVerified;
  }

  // Use to bypass the guard in certain situations.
  setIsVerified(): void {
    this.isVerified = true;
  }
}

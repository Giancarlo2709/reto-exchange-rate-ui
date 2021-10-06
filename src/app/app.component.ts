import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gama-vision-web';

  isLoggedIn = false;

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit() {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.router.navigate(['/home']);
      // this.roles = user.roles;

      // this.username = user.username;
    }
  }

  signOut(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}

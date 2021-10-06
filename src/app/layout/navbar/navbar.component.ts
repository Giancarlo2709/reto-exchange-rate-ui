import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserLoginResponse } from 'src/app/models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username : string = '';

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      const user: UserLoginResponse = this.tokenStorage.getUser();
      this.username = user.fullName;
    }
  }

  logout(): void {
    Swal.fire({
      title: 'Advertencia',
      text: `¿Está seguro que desea Cerrar Sesión?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cerrar sesión!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.tokenStorage.signOut();
        window.location.reload();
      }
    });
    
  }

}

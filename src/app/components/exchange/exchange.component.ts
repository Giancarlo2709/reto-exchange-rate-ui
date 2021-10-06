import { Component, OnInit, ViewChild } from '@angular/core';
import { ExchangeService } from '../../services/exchange.service';
import { ExchangeRateGetResponse, ExchangeRateAllResponse } from '../../models/exchange';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { logout } from '../../helpers/utilSesion';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import PageableUtil from '../../helpers/util';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {

  exchanges: ExchangeRateAllResponse[] = [];
  showColumns: string[] = ['id', 'currencyCodeOrig', 'currencyCodeDest', 'amount', 'exchangeRateDate', 'edit'];

  constructor(
    private exchangeService: ExchangeService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.findAll();  
  }

  private findAll() {
    this.exchangeService.findAll()
    .subscribe(next => {
      this.exchanges = next;
    }, e => {
      if (e.status === 401) {
        logout(this.tokenStorage);
      }
    });
  }

  /*public deleteBrand(brandGetPageableResponse: BrandGetPageableResponse) {
    Swal.fire({
      title: 'Advertencia',
      text: `¿Está seguro que desea eliminar ${brandGetPageableResponse.description}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.value) {
        this.brandService.delete(brandGetPageableResponse.brandId).subscribe(() => {
          this.findAllPageable();
          Swal.fire('Eliminar: ', `${brandGetPageableResponse.description} eliminado correctamente`, 'success');
        }, err => {
          console.log('error: ', err);
          if (err.status === 401) {
            logout(this.tokenStorage);
          }

          if(err.status === 500) {
            Swal.fire('Eliminar: ', err.error.message, 'error');
          }

          if(err.status === 0 && err.statusText === 'Unknown Error') {
            Swal.fire('Eliminar: ', 'No hay conexión con el servidor. Porfavor contactarse con soporte técnico', 'error');
          }
        });
      }
    });
  }*/

}

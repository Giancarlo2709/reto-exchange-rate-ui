import { Component, OnInit } from '@angular/core';
import { ExchangeRateUpdateRequest, ExchangeRate } from 'src/app/models/exchange';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ExchangeService } from 'src/app/services/exchange.service';
import Swal from 'sweetalert2';
import { logout } from '../../../helpers/utilSesion';

@Component({
  selector: 'app-exchange-update',
  templateUrl: './exchange-update.component.html',
  styleUrls: ['./exchange-update.component.css']
})
export class ExchangeUpdateComponent implements OnInit {

  public title = 'Actualizar Tipo de Cambio';
  public error: any;

  public exchange = new ExchangeRate();
  public requestUpdate = new ExchangeRateUpdateRequest();

  constructor(
    private exchangeService: ExchangeService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id: number = +params.get('id');
      console.log(id);
      
      if (id) {
        this.exchangeService.findById(id).subscribe(m => {
          this.requestUpdate = {
            currencyCodeOrig: m.currencyCodeOrig,
            currencyCodeDest: m.currencyCodeDest,
            exchangeRateAmount: m.amount,
            exchangeRateDate: m.exchangeRateDate
          };
        });
      }
    });
  }

  update() : void {
    this.exchangeService.updateExchange(this.requestUpdate)
        .subscribe(b => {
          Swal.fire('Editar', 'Tipo de cambio actualizado con éxito', 'success');
          this.router.navigate(['/exchange']);
        }, err => {
          this.catchError(err);
        });
  }

  private initializeError() : void {
    this.error = { description: '', error: { message : '' } };
  }

  private catchError(err: any) {
    if(err.status === 401) {
      logout(this.tokenStorage);
    }

    if(err.status === 400 || err.status === 500) { 
      this.initializeError();

      err.error.errors.forEach(element => {
        if (element.code === 'description') {
          this.error.description = element.message;
        }
      });
    }
  }

}

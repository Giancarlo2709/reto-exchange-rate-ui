import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { ExchangeRateGetRequest, Currency } from 'src/app/models/exchange';
import { Router, ActivatedRoute } from '@angular/router';
import { logout } from '../../../helpers/utilSesion';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ExchangeService } from 'src/app/services/exchange.service';

@Component({
  selector: 'app-exchange-form',
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.css']
})
export class ExchangeFormComponent implements OnInit {

  public title = 'Cambio de Moneda';
  public brand = new Brand();
  public error: any;
  public exchangeRequest = new ExchangeRateGetRequest();
  public currencies : Currency[] = [
    { code: 'PEN', name: 'Soles' },
    { code: 'USD', name: 'Doláres' },
    { code: 'EUR', name: 'Euros' }
  ];

  public exchangeAmount : number;
  public exchangeRate: number;
  hasExchange: boolean = false;

  constructor(
    private exchangeService: ExchangeService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  exchange() : void {
    console.log('Entraste');
    this.exchangeService.exchange(this.exchangeRequest)
    .subscribe(next => {
      this.hasExchange = true;
      this.exchangeAmount = next.exchangeAmount;
      this.exchangeRate = next.exchangeRateAmount;
    }, e => {
      if (e.status === 401) {
        logout(this.tokenStorage);
      }
    });
  }

}

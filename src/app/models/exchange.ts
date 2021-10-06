export class ExchangeRateGetRequest {
    currencyCodeOrig : string;
    currencyCodeDest: string;
    amount: number;
}

export class ExchangeRateUpdateRequest {
    currencyCodeOrig : string;
    currencyCodeDest: string;
    exchangeRateAmount: number;
    exchangeRateDate: string;
}

export class ExchangeRateGetResponse {
    currencyCodeOrig: string;
    currencyCodeDest: string;
    amount: number;
    exchangeAmount: number;
    exchangeRateAmount: number;
}

export class ExchangeRateAllResponse {
    id: number;
    currencyCodeOrig: string;
    currencyCodeDest: string;
    amount: number;
    exchangeRateDate: string;
}

export class Currency {
    code: string;
    name: string;
}

export class ExchangeRate {
    id: number;
    currencyCodeOrig: string;
    currencyCodeDest: string;
    amount: number;
    exchangeRateDate: string;
} 

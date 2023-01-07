
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Injectable()
export class appService {

  constructor(private http: HttpClient,
    private datePipe: DatePipe) {
  }

  findPrice(date: Date): Observable<any> {
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27` + this.datePipe.transform(date, "MM-dd-yyyy") + `%27&$top=100&$format=json`;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { headers });
  }
  findZipCode(cep: String): Observable<any> {
    const url = `https://api.postmon.com.br/v1/cep/` + cep;
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<any>(url, { headers });
  }
}


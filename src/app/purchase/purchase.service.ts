
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { from } from 'rxjs';

@Injectable()
export class purchaseService {

  constructor(private http: HttpClient,
    private db: NgxIndexedDBService) {
  }
  list(): Observable<any> {
    return from(this.db.getAll('purchase'));
  }
  salvar(entity: any): Observable<any> {

    return from(this.db.add('purchase', entity));
  }
}


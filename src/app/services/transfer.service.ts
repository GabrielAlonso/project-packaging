import { Transfer } from './../models/transfer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfer: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.listTransfer = [];
  }

  get transfers() {
    return this.listTransfer;
  }

  allTransfer(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transfer: any) {
    this.hydrate(transfer);
    this.listTransfer.push(transfer);
  }

  private hydrate(transfer: any) {
    transfer.dateTransfer = new Date();
  }
}

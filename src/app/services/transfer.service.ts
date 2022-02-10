import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private listTransfer: any[];

  constructor() {
    this.listTransfer = [];
  }

  get transfers() {
    return this.listTransfer;
  }

  add(transfer: any) {
    this.hydrate(transfer);
    this.listTransfer.push(transfer);
  }

  private hydrate(transfer: any) {
    transfer.dateTransfer = new Date();
  }
}

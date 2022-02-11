import { Transfer } from './../models/transfer.model';
import { Component, EventEmitter, Output } from '@angular/core';
import { TransferService } from '../services/transfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value_transfer: number;
  destiny_transfer: number;

  constructor(private service: TransferService, private router: Router) {}

  transfer_value() {
    const valueEmit: Transfer = {
      valueTransf: this.value_transfer,
      destinyTransf: this.destiny_transfer
    };

    this.service.add(valueEmit).subscribe(
      result => {
        console.log(result);
        this.clearField();
        this.router.navigateByUrl('bank-statement');
      },
      error => console.error(error)
    );
  }

  clearField() {
    this.value_transfer = null;
    this.destiny_transfer = null;
  }
}

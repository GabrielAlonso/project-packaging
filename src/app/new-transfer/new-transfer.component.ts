import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class newTransferComponent {
  @Output() toTransfer = new EventEmitter<any>();

  value_transfer: number;
  destiny_transfer: number;

  transfer_value() {
    this.toTransfer.emit({
      valueTransfer: this.value_transfer,
      destinyTransfer: this.destiny_transfer,
    });
  }
}

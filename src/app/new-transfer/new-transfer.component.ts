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
    console.log('Value: ', this.value_transfer);
    console.log('Destiny: ', this.destiny_transfer);
    this.toTransfer.emit({valor: this.value_transfer, destino: this.destiny_transfer});
    console.log('Tranfer done!');
  }

}

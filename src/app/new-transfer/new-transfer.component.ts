import { Component } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class newTransferComponent {

  value_transfer: number;
  destiny_transfer: number;


  transfer_value() {
    console.log('Value: ', this.value_transfer);
    console.log('Destiny: ', this.destiny_transfer);
    console.log('Tranfer done!');
  }

}

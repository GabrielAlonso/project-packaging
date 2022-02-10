import { TransferService } from './../services/transfer.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {
  transferencies: any[];

  constructor(private service: TransferService) {}

  ngOnInit() {
    this.transferencies = this.service.transfers;
  }
}

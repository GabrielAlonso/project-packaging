import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bank-statement',
  templateUrl: './bank-statement.component.html',
  styleUrls: ['./bank-statement.component.scss']
})
export class BankStatementComponent implements OnInit {

  @Input() transferencies: any[];

  constructor() { }

  ngOnInit(): void {
  }

}

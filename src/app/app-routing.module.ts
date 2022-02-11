import { NewTransferComponent } from './new-transfer/new-transfer.component';
import { BankStatementComponent } from './bank-statement/bank-statement.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bank-statement', pathMatch: 'full' },
  { path: 'bank-statement', component: BankStatementComponent },
  { path: 'new-transfer', component: NewTransferComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

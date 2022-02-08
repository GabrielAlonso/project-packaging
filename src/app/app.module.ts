import { newTransferComponent } from './new-transfer/new-transfer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BankStatementComponent } from './bank-statement/bank-statement.component';

@NgModule({
  declarations: [
    AppComponent,
    newTransferComponent,
    BankStatementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component, OnInit } from '@angular/core';
import { Transaction, BankAccountService } from '../../services/bank-account.service';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list-movement',
  imports: [CommonModule],
  templateUrl: './movement-list.component.html'
})
export class MovementListComponent implements OnInit {
  transactions: Transaction[] = [];
  balance: number = 0;

  constructor(private bankAccountService: BankAccountService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.bankAccountService.getTransactions().subscribe(txs => this.transactions = txs);
    this.bankAccountService.getBalance().subscribe(bal => this.balance = bal);
  }
}

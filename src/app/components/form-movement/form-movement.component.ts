

import { Component } from '@angular/core';
import { BankAccountService } from '../../services/bank-account.service';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-form-movement',
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './movement-form.component.html'
})
export class FormMovementComponent {
  amount: number = 0;
  message: string = '';

  constructor(private BankAccountService: BankAccountService) {}

  deposit(): void {
    this.BankAccountService.deposit(this.amount).subscribe({
      next: () => this.message = '✅ Dépôt effectué !',
      error: () => this.message = '❌ Erreur lors du dépôt.'
    });
  }

  withdraw(): void {
    this.BankAccountService.withdraw(this.amount).subscribe({
      next: () => this.message = '✅ Retrait effectué !',
      error: () => this.message = '❌ Solde insuffisant ou erreur.'
    });
  }
}

import { Component } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-account-component',
  standalone: false,
  templateUrl: './open-account-component.html',
  styleUrl: './open-account-component.css'
})
export class OpenAccountComponent {
  account : Account = new Account();

  constructor(private accountService:AccountService, private route:Router){}

  onSubmit(){
    this.openAccount();
  }

  openAccount() {
    this.accountService.openAccount(this.account).subscribe(
      data => {
        this.goToAccountList();
      }
    )
  }

  goToAccountList() {
    this.route.navigate(['/accounts']);
  }
}

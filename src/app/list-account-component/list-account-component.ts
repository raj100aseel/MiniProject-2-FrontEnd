import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-list-account-component',
  standalone: false,
  templateUrl: './list-account-component.html',
  styleUrl: './list-account-component.css'
})
export class ListAccountComponent implements OnInit{
  accounts : Account[] = [];

  constructor(private accountService : AccountService){}

  ngOnInit(): void {
    this.getAccounts();
  }

  private getAccounts() {
    this.accountService.getAccountList().subscribe(
      data => {this.accounts = data;}
    )
  }
}

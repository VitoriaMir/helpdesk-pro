import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  totalChamados = 0;

  ngOnInit() {
    this.totalChamados = 42; // Substituir por chamada à API futuramente
  }
}

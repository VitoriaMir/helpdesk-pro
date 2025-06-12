import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html'
})
export class TicketsComponent implements OnInit {
  chamados = [
    { id: 1, titulo: 'Erro no sistema', status: 'Aberto' },
    { id: 2, titulo: 'Não consigo logar', status: 'Fechado' }
  ];

  ngOnInit() {}
}

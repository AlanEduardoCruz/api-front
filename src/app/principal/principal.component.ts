import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  // Variavel para visibilidade dos botões

  btnCadastro: boolean = true;

  //  JSON de clientes

  clientes: Cliente[] = [];

  // Construtor

  constructor(private servico: ClienteService) {}

  // Método para selecionar clientes

  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  // Método de inicialização

  ngOnInit() {
    this.selecionar();
  }
}

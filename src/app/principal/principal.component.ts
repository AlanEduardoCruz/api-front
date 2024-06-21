import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  // Objeto cliente
  cliente = new Cliente();

  // Variavel para visibilidade dos botões

  btnCadastro: boolean = true;

  // variavel para visibilidade dos botoes
  tabela: boolean = true;

  //  JSON de clientes

  clientes: Cliente[] = [];

  // Construtor

  constructor(private servico: ClienteService) {}

  // Método para selecionar clientes

  selecionar(): void {
    this.servico.selecionar().subscribe((retorno) => (this.clientes = retorno));
  }

  // Método cadastrar

  cadastrar(): void {
    this.servico.cadastrar(this.cliente).subscribe((retorno) => {
      // Cadastrar o cliente no vetor
      this.clientes.push(retorno);

      // Limpar formulario

      this.cliente = new Cliente();

      // Mensagem

      alert('Cliente cadastrado com sucesso');
    });
  }

  // metodo para selecionar um cliente especifico

  selecionarCliente(posicao: number): void {
    // Selecionar cliente no vetor

    this.cliente = this.clientes[posicao];

    // Visibilidade botoes
    this.btnCadastro = false;

    // Visibilidade tabela
    this.tabela = false;
  }

  // Método de inicialização

  ngOnInit() {
    this.selecionar();
  }
}

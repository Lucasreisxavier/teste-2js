import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 111111111111);
const cliente2 = new Cliente("Alice", 222222222222);
let numeroDeContas = 0;

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(cliente2, 1002);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(contaCorrenteRicardo);
console.log(ContaCorrente.numeroDeContas);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PessoaFisica_1 = require("./model/PessoaFisica");
const PessoaJuridica_1 = require("./model/PessoaJuridica");
const pf1 = new PessoaFisica_1.PessoaFisica("jubileu", "3838383838");
pf1.setNome(`Wesley Sneijder`);
pf1.setCpf(`292929292929`);
console.log(`Nome: ${pf1.getNome()}, CPF: ${pf1.getCpf()}`);
console.log(`Documento Identificado: ${pf1.documentoIdentificador()}`);
const pj1 = new PessoaJuridica_1.PessoaJuridica("Endreia", "556556556556");
pj1.setNome(`Josefina`);
pj1.setCnpj(`001001001001`);
console.log(`Nome: ${pj1.getNome()}, CNPJ: ${pj1.getCnpj()}`);
console.log(`Documento Identificado: ${pj1.documentoIdentificador()}`);
//# sourceMappingURL=index.js.map
import { BebeNatimorto } from "./model/BebeNatimorto";
import { BebeNormal } from "./model/BebeNormal";
import { BebePrematuro } from "./model/BebePrematuro";

const bn1 = new BebeNatimorto("Lua", "1kg", "20cm", "mau desenvolvimento");
bn1.setNome(`Júlia`);
bn1.setPeso(`700g`);
bn1.setAltura(`15cm`);
bn1.setCausa(`falta de oxigênio`);
console.log(`Nome: ${bn1.getNome()}, Peso: ${bn1.getPeso()}, Altura: ${bn1.getAltura()}, Causa: ${bn1.getCausa()}`);

const b1 = new BebeNormal("Lucas", "3kg", "35cm", "falta uma vacina");
b1.setNome(`Lamar`);
b1.setPeso(`3kg500g`);
b1.setAltura(`37cm`);
b1.setVacinado(`Tomou todas as vacinas`);
console.log(`Nome: ${b1.getNome()}, Peso: ${b1.getPeso()}, Altura: ${b1.getAltura()}, Vacinado: ${b1.getVacinado()}`);

const bp1 = new BebePrematuro("Linda", "2kg", "22cm", "32 semanas");
bp1.setNome(`Lidiane`);
bp1.setPeso(`2kg500g`);
bp1.setAltura(`25cm`);
bp1.setSemanasGestacao(`34 semanas`);
console.log(`Nome: ${bp1.getNome()}, Peso: ${bp1.getPeso()}, Altura: ${bp1.getAltura()}, Semanas de Gestação: ${bp1.getSemanasGestacao()}`);

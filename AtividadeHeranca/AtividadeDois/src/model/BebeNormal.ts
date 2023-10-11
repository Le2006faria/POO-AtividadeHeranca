import { Bebe } from "./Bebe";

export class BebeNormal extends Bebe{

    private vacinado: string;

    public constructor(_nome: string, _peso: string, _altura: string, _vacinado: string){
        super(_nome, _peso, _altura);
        this.vacinado = _vacinado;
    }

    public setVacinado(_vacinado: string):void{
        this.vacinado = _vacinado;
    }

    public getVacinado():string {
        return this.vacinado;
    }
}
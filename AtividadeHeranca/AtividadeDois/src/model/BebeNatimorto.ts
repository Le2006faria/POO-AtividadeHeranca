import { Bebe } from "./Bebe";

export class BebeNatimorto extends Bebe{

    private causa: string;

    public constructor(_nome: string, _peso: string, _altura: string, _causa: string){
        super(_nome, _peso, _altura);
        this.causa = _causa;
    }

    public setCausa(_causa: string):void{
        this.causa = _causa;
    }

    public getCausa():string {
        return this.causa;
    }
}
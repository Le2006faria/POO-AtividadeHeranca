import { Bebe } from "./Bebe";

export class BebePrematuro extends Bebe{

    private semanasGestacao: string;

    public constructor(_nome: string, _peso: string, _altura: string, _semanasGestacao: string){
        super(_nome, _peso, _altura);
        this.semanasGestacao = _semanasGestacao;
    }

    public setSemanasGestacao(_semanasGestacao: string):void{
        this.semanasGestacao = _semanasGestacao;
    }

    public getSemanasGestacao():string {
        return this.semanasGestacao;
    }
}
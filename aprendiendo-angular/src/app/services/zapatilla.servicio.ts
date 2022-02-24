import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
@Injectable()
export class ZapatillaService{
    public zapatillas:Array<Zapatilla>;
    constructor(){
        this.zapatillas=[
            new Zapatilla('Reebock',100,'Reebock','Reebok',true),
            new Zapatilla('Nike',80,'Nike','Reebok',true),
            new Zapatilla('Adidas',90,'Adidas','Reebok',true),
            new Zapatilla('Adidas Predator',50,'NB','Reebok',true),
            new Zapatilla('FILA',30,'FILA','Reebok',false)
        ];
    }

    getTexto(){
        return "Hola, este es un servicio."
    }

    getZapatillas():Array<Zapatilla>{
        return this.zapatillas
    }
}
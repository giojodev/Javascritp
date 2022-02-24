import { Component,OnInit,DoCheck,OnDestroy } from "@angular/core";

@Component({
    selector: 'Videojuego',
    templateUrl:'./videojuego.component.html'
})

export class VideojuegoComponent implements OnInit,DoCheck,OnDestroy{
    public titulo:string;
    public listado:string;
    constructor(){
        this.titulo="Componenten de Videojuegos";
        this.listado="Listado de los juegos mas populares"
        console.log("Se ha cargado el componente")
    }

    ngOnInit(){
       // console.log("OnInit Ejecutado")
    }
    ngDoCheck(){
        //console.log("DoCheck Ejectuado")
       
    }
    cambiarTitulo(){
        this.titulo="Nuevo titulo Angular Gio"
    }
    ngOnDestroy(){
        //console.log("onDestroy Ejecutado");
    }
}
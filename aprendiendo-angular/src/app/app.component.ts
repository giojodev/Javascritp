/*
Un componenete se confirma de un import, de donde se manda a cargar
desde otro sitio con el import para traer el modulo

 */
import { Component } from '@angular/core';
import { configuracion } from './models/configuracion';
/*
El decorador sirve para cargar el componente, donde se indica donde
y en que sitio de la web sera utilizado

En este caso se carga el componente en app-root que sera cargado
en el index.html
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master Javascript y Angular Gio';
  public mostrar_videojuegos:boolean=true;
  public descripcion:string;
  public configu;
  
  constructor(){
    this.configu=configuracion;
    this.title=configuracion.titulo;
    this.descripcion=configuracion.descripcion;
  }

  ocultarVidejuegos(variable:boolean){
    this.mostrar_videojuegos=variable;
  }
}

import { Component, OnInit } from '@angular/core';
import { peticionesService } from '../services/peticiones.services';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers:[peticionesService]
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId:any;
  public fecha:any;

  public new_User:any;
  public usuario_guardado;
  constructor(
    private _peticionesService:peticionesService
  ) {
    this.userId=1;
    this.new_User={
          "name":"",
          "job":""
    }
   }

  ngOnInit(): void {
    this.fecha=new Date(2022,1,9);
    this.cargaUsuario();
  }

  onSubmit(form){

    this._peticionesService.addUser(this.new_User).subscribe(
      result=>{
        this.usuario_guardado=Response;
        form.reset();
      },
      error=>{
        console.log(<any>error);
      }
    );

  }

  cargaUsuario(){
    this.user=false;
    this._peticionesService.getUser(this.userId).subscribe(
      result=>{
        // console.log(result);
        this.user=result.data;
      },
      error=>{
        console.log(<any>error)
      }
    );
  }

}

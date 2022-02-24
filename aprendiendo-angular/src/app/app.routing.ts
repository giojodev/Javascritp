import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import {ExternoComponent} from './externo/externo.component';
import {ContactoComponent} from './contacto/contacto.component';

declare module "@angular/core" {
    interface ModuleWithProviders<T = any> {
        ngModule: Type<T>;
        providers?: Provider[];
    }
}
//Array de rutas
const appRoutes: Routes=[
    {path: '',component:HomeComponent},
    {path: 'home',component:HomeComponent},
    {path: 'zapatillas',component:ZapatillasComponent},
    {path: 'videojuego',component:VideojuegoComponent},
    {path: 'cursos',component:CursosComponent},
    {path: 'cursos/:nombre',component:CursosComponent},
    {path: 'cursos/:nombre/:followers',component:CursosComponent},
    {path: 'externo',component:ExternoComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: '**',component:HomeComponent}
];

//Exportar el modulo del router
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders =RouterModule.forRoot(appRoutes);
'use strict'

//Fetch (AJAX) y peticione asincronas a servicios / apis rest
var divusuarios=document.querySelector("#usuarios");
var divjanet=document.querySelector("#janet");
var divprofesor=document.querySelector("#profesor");

getUsuarios()
.then(data =>data.json())
.then(users=>{
        listadousuarios(users.data);
        
        
        return getinfo();
    })
    .then(data=>{
        divprofesor.innerHTML=data;

        return getJanet();
    })
    .then(data=>data.json())
    .then(user=>{
        mostrarJanet(user.data);      
    }).catch(error=>{
        //Captura errores
        //console.log(error);
        alert("Error en las peticiones");
    });

function listadousuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre=document.createElement("h3");
            nombre.innerHTML=i+". "+user.first_name+" "+user.last_name;
            divusuarios.append(nombre);
    
            document.querySelector(".loading").style.display="none";
        });
}

function getUsuarios(){
   return fetch("https://reqres.in/api/users?page=2");
}

function getJanet(){
    return fetch("https://reqres.in/api/users/2");
}

//CREACION DE UNA PROMESA DESDE 0
function getinfo(){
    var profesor={
        nombre:"Gio",
        apellido:"Orozco",
        url:"www.google.com"
    };
    //METODO PARA CREAR PROMESA
    return new Promise((resolve,reject)=>{
        var profesor_string='';
        setTimeout(() => {
            profesor_string=JSON.stringify(profesor);
            if(typeof profesor_string!="string"||profesor_string=='') return reject('Error 1');
        
            return resolve(profesor_string);
        }, (3000));
        
        
    });
    
}

function mostrarJanet(user){
   
        let nombre=document.createElement("h4");
        let avatar=document.createElement("img");
        nombre.innerHTML=". "+user.first_name+" "+user.last_name;
        avatar.src=user.avatar;
        avatar.width="100";

        divjanet.appendChild(nombre);
        divjanet.appendChild(avatar);
        document.querySelector("#janet .loading").style.display="none";

}
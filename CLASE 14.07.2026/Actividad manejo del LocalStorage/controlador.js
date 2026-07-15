//me traido el boton del html
const boton_registrar = document.getElementById('boton_registrar');
boton_registrar.addEventListener('click', ()=>{
    const nombre = document.getElementById('nombre').value.trim();
    // el trim lo usamos para eliminar espacios en blanco

    if(nombre.length <= 3){
        alert("El nombre debe tener mas de 3 caracteres");
        return;
    }

    localStorage.setItem('nombre', nombre);
    alert("El nombre ha sido registrado");
});

const boton_registrarApellido = document.getElementById('boton_registrarApellido');
boton_registrarApellido.addEventListener('click', function(){
    console.log("Click detectado");
    const apellido = document.querySelector('#apellido').value;
});

const boton_registrarRol = document.getElementById('boton_registrarRol');
boton_registrarRol.addEventListener('click', function(){
    console.log("Click detectado");
    const rol = document.querySelector('#rol').value;
});



// // FUNCION TRADICIONAL
// function hacer_bucle(){
//     for (let i = 0; i < 1000; i++) {
//         console.log(i);
//     }}

// async function hacer_saludo(){
//     const info =await hacer_bucle();
//     console.log("Hola, este es un saludo");
// }

// // Este es un diccionario que contiene la información del cliente que se va a crear.
// const info_cliente = {
//     "nombre" : "Samuel",
//     "apellido" : "Perez",
//     "roll" : "Administrador"        
// }

// const boton_enviar = document.getElementById('crearCliente');
// console.log(boton_enviar);

// boton_enviar.addEventListener('click', ()=>{
//     let info_storage = localStorage.getItem('clientes');
//     console.log(info_storage)

//     localStorage.setItem('info_cliente', JSON.stringify(info_cliente));

//     localStorage.setItem('info_token', JSON.stringify([]));
//     localStorage.setItem('info_api', JSON.stringify([]));
//     localStorage.setItem('info_producto', JSON.stringify([]));

//     hacer_saludo();
// });


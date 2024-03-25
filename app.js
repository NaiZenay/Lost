// Responsive el cuerpo pricipal del post segun el tamaño de la pantalla 
document.addEventListener('DOMContentLoaded',()=>{
    info=document.querySelector('#info');
    divisor1=document.querySelector('#divisor1');
    divisor2=document.querySelector('#divisor2');
    datos= document.querySelector('#datos');
    datosMascota= document.querySelector('#datosMascota');


    if(screen.width <= 450 ){
        info.classList.add("h-25");
       divisor1.hidden=true;
       divisor2.hidden=true;
        datos.classList.remove("col-2","fs-5");
        datos.classList.add("col-5","fs-6");
        datosMascota.classList.remove("col-2","fs-5");
        datosMascota.classList.add("col-5","fs-6");

    }else{
        divisor1.hidden=false;
        divisor2.hidden=false;
        datos.classList.remove("col-5","fs-6");
        datos.classList.add("col-2","fs-5");
        datosMascota.classList.remove("col-5","fs-6");
        datosMascota.classList.add("col-2","fs-5");
    }
})

window.addEventListener('resize',()=>{
    
    if(screen.width <= 480 ){
        divisor1.hidden=true;
        divisor2.hidden=true;
        datos.classList.remove("col-2","fs-5");
        datos.classList.add("col-5","fs-6");
        datosMascota.classList.remove("col-2","fs-5");
        datosMascota.classList.add("col-5","fs-6");
    }else{
        divisor1.hidden=false;
        divisor2.hidden=false;
        datos.classList.remove("col-5","fs-6");
        datos.classList.add("col-2","fs-5");
        datosMascota.classList.remove("col-5","fs-6");
        datosMascota.classList.add("col-2","fs-5");
    }
})

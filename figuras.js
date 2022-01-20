

function perimetroCuadrado(lado) {
    return lado * 4;
};


function areaCuadrado(lado){
    return lado * lado
};



function perimetroTriangulo( ladoA, ladoB, base ){
    return ladoA + ladoB + base;
};

function areaTriangulo( base , altura){
    return (base * altura) / 2;
};
function diametroaCirculo(radio){
    return radio * 2;
};
const PI = Math.PI;
function perimetroCirculo(radio){
    return diametroaCirculo(radio) * PI;
};
function areaCirculo(radio){
    return (radio * radio) * PI;
};

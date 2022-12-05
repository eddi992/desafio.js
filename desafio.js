const jugadorUno = {
    nombre: "Marce",
    habilidades: {
        ataque: 70,
        velocidad: 30,
        vida: 60,
        magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
};
const jugadorDos = {
    nombre: "Flor",
    habilidades: {
        ataque: 73,
        velocidad: 30,
        vida: 80,
        magia: 100,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
};

var contadorPuntosJug1 = 0;
var contadorPuntosJug2 = 0;

var ganador;

if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque) {
    contadorPuntosJug2++;
} else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//COMPARACIÓN POR VELOCIDAD:

if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2++;
} else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//COMPARACIÓN POR NIVEL DE VIDA:

if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida) {
    contadorPuntosJug2++;
} else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//COMPARACIÓN POR MAGIA:

if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad) {
    contadorPuntosJug2++;
} else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//COMPARACIÓN POR CANTIDAD DE ARTÍCULOS

if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
    let contadorPuntosJug1 = contadorPuntosJug1 + 1;
} else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
    contadorPuntosJug2++;
} else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
}

//DEFINIENDO EL GANADOR DE LA PARTIDA

if (contadorPuntosJug1 > contadorPuntosJug2) {
    ganador = jugadorUno.nombre
} else {
    ganador = jugadorDos.nombre
}

var resultado = {
    [jugadorUno.nombre]: contadorPuntosJug1,
    [jugadorDos.nombre]: contadorPuntosJug2,
    ganador,
}
console.log(resultado)
console.table(jugadorDos);
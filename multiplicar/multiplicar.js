// requireds
const fs = require('fs')
const colors = require('colors')

let creador = (e) => {
    return new Promise((resolve, reject) => {
        // console.log('e', e);
        if (e.base != "" && !e.limite) {
            fs.writeFile(`tablas-multiplicar/tabla-${e.base}.txt`, e.data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla-${e.base}.txt`);
            });
        } else if (e.base != "" && e.limite != "") {
            fs.writeFile(`tablas-multiplicar/tabla-${e.base}-hasta-${e.limite}.txt`, e.data, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(`tabla-${e.base}-hasta-${e.limite}.txt`);
                }
            });
        }
    })
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor de base '${base}' no es un numero`)
            return;
        } else if (!Number(limite)) {
            reject(`El valor de limite: '${limite}' no es un numero`)
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        let jsn = {
            base,
            limite,
            data
        }
        resolve(creador(jsn))
            // console.log(data);
            // resolve(data)
    })
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || base === true) {
            reject(`El valor ingresado '${base}' no es un numero`)
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        let jsn = {
            base,
            data
        }
        resolve(creador(jsn))
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}
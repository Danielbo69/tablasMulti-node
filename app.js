// Import or requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
const colors = require('colors')
    // let base = 6;
    // let arg = process.argv;
    // let parametro = argv[2];
    // let base = parametro.split('=')[1];

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('crear')
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        // console.log('listar')
        listarTabla(argv.base, argv.limite)
            .then(listado => console.log(`Lista creada: ${colors.green(listado)}`))
            .catch(e => console.log(e));
        break;
    case 'borrar':
        console.log('borrar')
        break;
    default:
        console.log("Comando no reconocido!")
}
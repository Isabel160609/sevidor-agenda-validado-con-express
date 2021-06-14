const {Router} = require('express')
const router = Router()
const { body } = require('express-validator');
const personasCtrl = require('../controllers/personas.controller.js')

const { check } = require("express-validator")
// function validadni (dni){
//     const letras ="TRWAGMYFPDXBNJZSQVHLCKET";
//     if(/^\d{8}[aA-zZ]$/.test(dni)){
//       const numero = dni.substr(0,dni.length-1);
//       const letra = dni.substr(dni.length-1);
//       const calculo = numero % 23;
//       const letraSeleccionada = letras.charAt(calculo)
//       return letra.toUpperCase()==letraSeleccionada

//   }else{
//       return new Error('Dni debe tener 8 numeros y 1 letra final');
//     }
//   }
//   body('dni').custom((value, {req}) => {
//     const letras ="TRWAGMYFPDXBNJZSQVHLCKET";
//     const numero = dni.substr(0,dni.length-1);
//     const letra = dni.substr(dni.length-1);
//     const calculo = numero % 23;
//     const letraSeleccionada = letras.charAt(calculo)
//     if (letra.toUpperCase()==letraSeleccionada) {
//       throw new Error('la letra del dni no coincide.');
//     }
  
//     return true;
//   })
const valid_persona = [
  //no puede incluir números y la longitud debe ser superior a 3
  check('nombre', 'Nombre debe tener minimo 3 letras')
    .isLength({ min: 3})
    .isAlpha(locale= 'es-ES',{ignore: '- /'}),
  //no puede incluir números y la longitud debe ser superior a 3
  check('apellidos', 'Apellidos debe tener minimo 3 letras')
    .isLength({ min: 3})
    .isAlpha(locale= 'es-ES',{ignore: '- /'}),
  //número comprendido entre 0 y 125
  check('edad', 'Edad comprendida entre 0 y 125 años')
    .isFloat({ min: 0, max: 125 }),
    
  //cadena alfanumérica de 9 caracteres
  check('dni', 'Dni debe tener 8 numeros y 1 letra final')
    .isLength({ min: 9, max:9})
    .isAlphanumeric(),

 // fecha en formato ISO8601
  // check('cumple', 'Formato de la fecha debe ser yyyy-mm-dd')  
  //   .isISO8601(),
    
  //no puede incluir números y la longitud debe ser superior a 3
  check('color', 'Color debe tener minimo 3 letras')
    .isLength({ min: 3})
    .isAlpha(locale= 'es-ES',{ignore: '- /'}),
 // cadena de texto comprendida en la siguiente lista: Hombre, Mujer, Otro, No especificado
  check('sexo', 'Debe ser un valor de los siguientes: Hombre, Mujer, Otro, No especificado')
    .isIn ('hombre',  'mujer' ,'otro' ,'no especificado')
];

router.get('/personas', personasCtrl.getPersonas);
router.post('/personas',valid_persona, personasCtrl.createPersona);
router.get('/personas/:id', personasCtrl.getPersona);
router.put('/personas/:id',valid_persona, personasCtrl.editPersona);
router.delete('/personas/:id', personasCtrl.deletePersona);



module.exports = router

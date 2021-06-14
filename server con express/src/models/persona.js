// const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');


const personaSchema = new Schema({
	nombre: {type: String, required: true, },
    apellidos: {type: String, required: true, },
    edad: {type: Number, required: true, },
    cumple: {type: Date, required: true, match:[/^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/, 'no tiene formato correcto']},

    dni: {type: String, required: true, match:[ /^\d{8}[aA-zZ]$/, 'no tiene un formato correcto'], validate: [
        function(dni){
          const letras ="TRWAGMYFPDXBNJZSQVHLCKET";
          if(/^\d{8}[aA-zZ]$/.test(dni)){
            const numero = dni.substr(0,dni.length-1);
            const letra = dni.substr(dni.length-1);
            const calculo = numero % 23;
            const letraSeleccionada = letras.charAt(calculo)
            return letra.toUpperCase()==letraSeleccionada
    
        }'la letra del Dni no es valida'
        },'la letra del Dni no es valida'
    ]},
    color: {type: String, required: true,},
    sexo: {type: String, required: true,},
    
},{
    timestamps: true,
    versionKey: false
})
    

module.exports =  model('persona', personaSchema);



    
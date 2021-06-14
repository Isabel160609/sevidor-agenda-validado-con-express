const personasCtrl = {}

const persona = require('../models/persona')
const Persona= require('../models/persona')
const { validationResult } = require('express-validator/src/validation-result');

personasCtrl.getPersonas = async (req, res) =>{
   const personas = await Persona.find()
   res.json(personas)
} 

personasCtrl.createPersona = async (req, res) =>{
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
  }
  else
  {
   const newPersona= new Persona(req.body)
   await newPersona.save()
   res.json({ status: "persona creada" });
  }
} 

personasCtrl.getPersona = async (req, res) =>{
    console.log(req.params)
    const persona = await Persona.findById(req.params.id)
    res.send(persona)
    
} 

personasCtrl.editPersona = async (req, res) =>{
   const errors = validationResult(req);

   if (!errors.isEmpty()) {
       return res.status(422).json({ errors: errors.array() });
   }
   else
   {
  await Persona.findByIdAndUpdate(req.params.id, req.body)
  res.json({status: 'persona modificada'})
   }
} 

personasCtrl.deletePersona = async (req, res) =>{
   await persona.findByIdAndDelete(req.params.id)
    res.json({status: 'persona eliminada'})
} 




module.exports = personasCtrl;

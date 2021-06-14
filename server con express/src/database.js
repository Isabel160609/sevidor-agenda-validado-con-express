const mongoose = require('mongoose');
mongoose.set('runValidators', true); // here is your global setting
mongoose
.connect('mongodb://localhost/agenda-personas',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('db esta conectada'))
.catch(err => console.log(err));
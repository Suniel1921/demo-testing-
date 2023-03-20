const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://technologyaava:aavatech@cluster0.mqisrvd.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log(`Database Connected !`);
}).catch((error)=>{
    console.log(`Database not Connetected ! ${error}`);
})
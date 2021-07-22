const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then( () => console.log("connected to db") )
.catch( err => console.log("failed to connect to db", err) );


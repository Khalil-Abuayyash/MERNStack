const express = require('express');
const cors = require('cors');
const port = 8000;

require('./server/config/mongoose.config')

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/routes/product.routes')(app);

app.listen(port, () => console.log(`listening on the port: ${port}`));


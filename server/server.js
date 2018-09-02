const express = require("express");
const routes = require('./routes');
const cors = require("cors");
const app = express();
app.use(cors());
app.set('port', 5000);

app.use('/', routes);


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
});
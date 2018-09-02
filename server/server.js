const express = require("express");
const routes = require('./routes');
const testroutes = require('./testroutes');
const cors = require("cors");
const app = express();
app.use(cors());
app.set('port', 5000);

app.use('/', routes);
app.use('/test', testroutes)


app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`)
});
const express = require('express');

const app = express();
const port = 3000;
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index)

app.listen(port, ()=> {
    console.log(`listening on ${port}`);
});

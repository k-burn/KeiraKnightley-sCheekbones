const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const port = process.env.PORT || 5000;

app.use (express.static('server/public'));

app.listen(port, ()=>{
    console.log('server up on', port);
})
app.use(bodyParser.urlencoded({ extended: true })); // <- req.body will not work without this!

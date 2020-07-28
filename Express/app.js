const express  = require("express");
// const { RSA_NO_PADDING } = require('constants');
const path = require("path");
const app = express();
const port= 80;
//EXPRESS RELATED STUFFS
app.use('/static',express.static('static'));

//PUG RELATED STUFFS
app.set('view engine','pug');
// set the template engine for pug
// set the views directory
app.set('views',path.join(__dirname,'views'));


// ENDPOINTS
app.get('/', (req, res)=> {
    const con = "these is the best content in internet"
    const params = { 'title':'pubg is the best game','content' : con}
    res.status(404).render('INDEX.pug',params);
  })
 



app.listen(port,()=>{
    console.log(`the application is started successfully on port ${port}`);
})

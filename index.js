const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
}); 
router.get('/quadro',function(req,res){
    res.sendFile(path.join(__dirname+'/quadro.html'));
    //__dirname : It will resolve to your project folder.
}); 
//add the router
app.use(express.static('public'));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/', router);

app.listen(process.env.port || 80);

console.log('Running at Port 80');
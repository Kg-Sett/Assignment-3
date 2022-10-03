const express = require ('express');
const path = require ('path');

const app = express()

app.get("",(req,res) => {

    res.sendfile(path.join(__dirname+'/assignment.html'));

})

app.listen(3000,()=>{
    console.log('server starting up at:port:3000:');
})
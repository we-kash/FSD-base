const express=require('express');
const app=express();
const appe=express();
const path=require('path');
appe.use('/product',res);
app.use('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"success.html"));
})

app.listen(3000);
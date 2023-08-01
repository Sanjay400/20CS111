const express = require("express");
const getNumbers = require("./apiCall.js");

const app = express()

app.get("/numbers",async(req,res)=>{

    const urls = req.query.url;
    
    if(typeof urls =="string"){

        let resp = await getNumbers(urls);
       
        if(resp!=false && resp.numbers!=undefined){
            
           //console.log(resp.numbers)
           res.send(resp.numbers);
           return;
        }
    }
    
    
    
    let numbers = [];

    if(urls==undefined || urls.length==0){
     res.send("url not found");
     return;
    }

    for(let i=0;i<=urls.length;i++){

        if(i==urls.length){res.send(numbers);return;}
        let resp = await getNumbers(urls[i]);
       
        if(resp!=false && resp.numbers!=undefined)
        numbers.push(...resp.numbers)
    }


})

app.listen(8008,()=>{
    console.log("port listened")
})

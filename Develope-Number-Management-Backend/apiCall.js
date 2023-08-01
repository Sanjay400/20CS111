
const axios = require("axios")


const getNumbers = async (url)=>{
    
    try{
        let resp = await axios.get(url);
        console.log(resp.data)
        return resp.data;
    }
    catch(err){
        return false;
    }
}

module.exports = getNumbers
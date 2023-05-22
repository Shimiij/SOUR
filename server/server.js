console.log("hey")
const express = require('express');
const app = express();
const PORT = 4000;
 
app.get("/", (req, res) => { res.send("Hello, world!") })
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
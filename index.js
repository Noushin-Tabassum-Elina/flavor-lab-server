const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;


const chefData = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Chefs recipe server running!!')
});


app.get('/chefs', (req, res) => {
    res.send(chefData);
})

app.get("/chefs/:id" , (req,res)=>{
    const id = req.params.id;
    const selectedChef =  chefData.chefs.find(cf => cf.chef_id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Recipe API is running on port: ${port}`)
})